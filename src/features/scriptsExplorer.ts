import * as vscode from 'vscode';
import axios from 'axios';
import markdownit from 'markdown-it';
import * as dotenv from 'dotenv';
import { basename, relative } from 'path';
import { isDownloadAllowedExtension } from './utility';

dotenv.config();

export const repositoryUrls: { userName: string, repoUrls: string[] }[] = [];

//#region Examples Test
repositoryUrls.push({
  userName: 'LastDemon99',
  repoUrls: [
    'https://github.com/LastDemon99/IW5-Sripts/tree/main/GSC/Utility',
    'https://github.com/LastDemon99/IW5-Sripts/tree/main/GSC/AlwaysUAV'
]
});

repositoryUrls.push({
  userName: 'Resxt',
  repoUrls: [
    'https://github.com/Resxt/Plutonium-IW5-Scripts/tree/main/gamemodes'
]
});

repositoryUrls.push({
  userName: 'EgHap',
  repoUrls: [
    'https://github.com/EgHap/eQualize/blob/main/TopKS.gsc'
]
});

repositoryUrls.push({
  userName: 'ca-de',
  repoUrls: [
    'https://github.com/ca-de/IW5-GSC-Scripts/blob/main/basic-scripts/commands.gsc',
    'https://github.com/ca-de/IW5-GSC-Scripts/blob/main/basic-scripts/speedometer.gsc'
]
});
//#endregion

export class IW5GscTreeDataProvider implements vscode.TreeDataProvider<IW5GscTreeItem> {
  private _onDidChangeTreeData: vscode.EventEmitter<IW5GscTreeItem | undefined | void> = new vscode.EventEmitter<IW5GscTreeItem | undefined | void>();
  readonly onDidChangeTreeData: vscode.Event<IW5GscTreeItem | undefined | void> = this._onDidChangeTreeData.event;

  getTreeItem(element: IW5GscTreeItem): vscode.TreeItem {
      return element;
  }

  getChildren(element?: IW5GscTreeItem): Thenable<IW5GscTreeItem[]> {
      if (element) {
          return Promise.resolve(this.getFilesForUser(element.label));
      } else {
          return Promise.resolve(this.getItems());
      }
  }

  private getItems(): IW5GscTreeItem[] {
      const items: IW5GscTreeItem[] = repositoryUrls.map(repo => {
          return new IW5GscTreeItem(repo.userName, '', vscode.TreeItemCollapsibleState.Collapsed);
      });

      const uniqueItems = Array.from(new Set(items.map(item => item.label)))
          .map(label => items.find(item => item.label === label)!)
          .sort((a, b) => a.label.localeCompare(b.label));

      return uniqueItems;
  }

  private getFilesForUser(userName: string): IW5GscTreeItem[] {
      const userRepos = repositoryUrls.find(repo => repo.userName === userName);
      if (!userRepos) return [];

      return userRepos.repoUrls.map(url => {
          return new IW5GscTreeItem(getbaseName(url), url, vscode.TreeItemCollapsibleState.None);
      });
  }
}

export class IW5GscTreeItem extends vscode.TreeItem {
  constructor(public readonly label: string, public readonly url: string, public readonly collapsibleState: vscode.TreeItemCollapsibleState) {
      super(label, collapsibleState);
      this.tooltip = `${this.label}`;
      this.description = this.url;
      
      if (collapsibleState === vscode.TreeItemCollapsibleState.None) {
        this.command = {
          command: 'iw5GscTreeView.openRepo',
          title: 'Open Repository',
          arguments: [this]
        };
      }
  }
}

async function fetchGitHubInfo(url: string, context: vscode.ExtensionContext, forceRefresh: boolean = false) {
  const cachedData = context.globalState.get<any>(url);

  if (cachedData && !forceRefresh) {
    return cachedData;
  }

  const token = process.env.GITHUB_TOKEN;
  const headers = token 
    ? { 'Authorization': `token ${token}`, 'Accept': 'application/vnd.github.v3.raw' } 
    : { 'Accept': 'application/vnd.github.v3.raw' };

    let isBlob = false;

  let urlMatch = url.match(/github\.com\/([^\/]+)\/([^\/]+)\/tree\/([^\/]+)\/?(.*)/);
  if (!urlMatch) {
    urlMatch = url.match(/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/?(.*)/);
    isBlob = false;
  }

  if (!urlMatch) {
    return {
      userName: 'Unknown',
      repoName: 'Unknown',
      branch: 'main',
      path: '',
      avatarUrl: undefined,
      readmeContent: undefined,
      changelogContent: undefined,
      issuesUrl: undefined,
      userUrl: undefined,
      files: undefined
    };
  }

  const [, userName, repoName, branch, repoPath] = urlMatch;
  const apiCache = new Map<string, any>();

  let avatarUrl: string | undefined = undefined;
  if (!forceRefresh) {
    avatarUrl = context.globalState.get(`${userName}-avatarUrl`);
  }

  if (!avatarUrl) {
    try {
      const apiUrl = await axios.get(`https://api.github.com/users/${userName}`, { headers });
      avatarUrl = apiUrl.data.avatar_url;
      context.globalState.update(`${userName}-avatarUrl`, avatarUrl);
    } catch (error) {
      console.error('Error fetching user avatar:', error);
    }
  }

  let readmeContent: string | undefined = undefined;
  const readmeCacheKey = `${userName}/${repoName}/readmeContent/${branch}`;
  readmeContent = context.globalState.get(readmeCacheKey);

  if (!readmeContent) {
    try {
      const readmePath = repoPath ? `${repoPath}/README.md` : 'README.md';
      const apiUrl = `https://api.github.com/repos/${userName}/${repoName}/contents/${readmePath}?ref=${branch}`;
      const readmeResponse = await axios.get(apiUrl, { headers });
      const md = new markdownit();
      md.options.html = true;
      readmeContent = md.render(readmeResponse.data);
      readmeContent = convertGitHubImageUrl(readmeContent);
      context.globalState.update(readmeCacheKey, readmeContent);
    } catch (error) {
      console.error('Error fetching README:', error);
    }
  }

  let changelogContent: string | undefined = undefined;
  const changelogCacheKey = `${userName}/${repoName}/changelogContent/${branch}`;
  changelogContent = context.globalState.get(changelogCacheKey);

  if (!changelogContent) {
    try {
      const changelogPath = repoPath ? `${repoPath}/CHANGELOG.md` : 'CHANGELOG.md';
      const apiUrl = `https://api.github.com/repos/${userName}/${repoName}/contents/${changelogPath}?ref=${branch}`;
      const changelogResponse = await axios.get(apiUrl, { headers });
      const md = new markdownit();
      md.options.html = true;
      changelogContent = md.render(changelogResponse.data);
      context.globalState.update(changelogCacheKey, changelogContent);
    } catch (error) {
      console.error('Error fetching CHANGELOG:', error);
    }
  }

  const issuesUrl = `https://github.com/${userName}/${repoName}/issues`;
  const userUrl = `https://github.com/${userName}`;

  const urlRelativeMatch = url.match(/https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/tree\/([^\/]+)\/(.+)/);
  const targetDir = urlRelativeMatch ? urlRelativeMatch[4] : undefined;
  const files = isBlob ? basename(url) : await fetchFilesRecursively(targetDir, userName, repoName, repoPath, branch, headers, apiCache);

  const data = {
    userName,
    repoName,
    branch,
    path: repoPath,
    avatarUrl,
    readmeContent,
    changelogContent,
    issuesUrl,
    userUrl,
    files
  };

  await context.globalState.update(url, data);
  return data;
}

async function fetchFilesRecursively(targetDir: string | undefined, userName: string, repoName: string, repoPath: string, branch: string, headers: any, cache: Map<string, any>): Promise<string[]> {
  const cacheKey = `${userName}/${repoName}/${branch}/${repoPath}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const files: string[] = [];
  try {
    const apiUrl = `https://api.github.com/repos/${userName}/${repoName}/contents/${repoPath}?ref=${branch}`;
    const response = await axios.get(apiUrl, { headers });

    for (const file of response.data) {
      if (file.type === 'file' && isDownloadAllowedExtension(file.name)) {
        let relativePath = `${repoPath}/${file.name}`;
        if (targetDir) relativePath = relative(targetDir, relativePath);
        files.push(relativePath);
      } else if (file.type === 'dir') {
        const subDirFiles = await fetchFilesRecursively(targetDir, userName, repoName, `${repoPath}/${file.name}`, branch, headers, cache);
        files.push(...subDirFiles);
      }
    }

    cache.set(cacheKey, files);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error fetching files: ${error.message}`);
    } else {
      console.error("Unknown error occurred while fetching files.");
    }
  }

  return files;
}

export async function getWebviewContent(url: string, webview: vscode.Webview, context: vscode.ExtensionContext): Promise<string> {
    const { userName, avatarUrl, readmeContent, changelogContent, issuesUrl, userUrl, files } = await fetchGitHubInfo(url, context);

    const extensionUri = context.extensionUri;
    const styleMain = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'css', 'main.css'));
    const styleGithub = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'css', 'github-markdown.css'));
    const toolkitScript = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'js', 'toolkit.js'));
    const webViewScript = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'js', 'webview.js'));
    
    const nonce = getNonce();
    const dirName = getbaseName(url);

    let filesList: string | undefined = undefined;
    if (files && files.length !== 0) {
      filesList = `<ul>`;
        filesList += files.map((file: string) => {
            return `<li>${file}</li>`;
        }).join('');
        filesList += `</ul>`;
    }

    return `<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src ${webview.cspSource} https:; script-src 'nonce-${nonce}' ${webview.cspSource}; style-src 'nonce-${nonce}' ${webview.cspSource}; connect-src https:; frame-src https:;"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${dirName}</title>
    <link href="${styleMain}" nonce="${nonce}" rel="stylesheet" type="text/css">
    <link href="${styleGithub}" nonce="${nonce}" rel="stylesheet" type="text/css">
  </head>
  <body>
    <div class="container">
      <div class="head">
        <div class="img">
          <img src="${avatarUrl}" alt="${userName} Logo" />
        </div>
        <div class="head-info">
          <div class="title">
            <h1>${dirName}</h1>
          </div>
          <label title="Publisher">${userName}</label>
          <div class="actions">
            <vscode-button id="downloadBtn" data-command="download">Download</vscode-button>
          </div>
        </div>
      </div>
      <div class="panel">
        <vscode-divider></vscode-divider>
        <vscode-panels>
          <vscode-panel-tab id="tab-1">DETAILS</vscode-panel-tab>
          <vscode-panel-tab id="tab-2">FILES</vscode-panel-tab>
          <vscode-panel-tab id="tab-3">CHANGELOG</vscode-panel-tab>
          <vscode-panel-view id="view-1">
            <div class="markdown-body">${readmeContent ? readmeContent : "Readme not available."}</div>
          </vscode-panel-view>
          <vscode-panel-view id="view-2">
            ${filesList ? filesList : "Files not available."}
          </vscode-panel-view>
          <vscode-panel-view id="view-3">
            <div class="markdown-body">${changelogContent ? changelogContent : "Changelog not available."}</div>
          </vscode-panel-view>
        </vscode-panels>
      </div>
      <div class="info">
        <vscode-divider></vscode-divider>
              <div class="categories">
                <h3>Category</h3>
                <div><vscode-tag>${'Utility'}</vscode-tag></div>
              </div>
              <br/>
              <vscode-divider></vscode-divider>
        <div class="resources">
          <h3>Resources</h3>
          <a href="${url}" target="_blank" rel="noopener noreferrer">Repository</a>
          <br/>
          <a href="${issuesUrl}" target="_blank" rel="noopener noreferrer">Issues</a>
          <br/>
          <a href="${userUrl}" target="_blank" rel="noopener noreferrer">${userName}</a>
        </div>
      </div>
    </div>
    <script nonce="${nonce}" src="${toolkitScript}" type="module"></script>
    <script nonce="${nonce}" src="${webViewScript}" type="module"></script>
  </body>
</html>`;
}

function getbaseName(url: string) {
  let dirName = basename(url);
  if (dirName.endsWith('.gsc')) dirName = dirName.replace('.gsc', '');
  return dirName;
}

function convertGitHubImageUrl(input: string): string {
  const regex = /<img([^>]*)src="(https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/?([^"]*)?)"([^>]*)\/?>/g;
  return input.replace(regex, (_match, attrsBefore, srcUrl, user, repo, branch, fileName, attrsAfter) => {
    const rawUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${fileName}`.trim();
    return `<img${attrsBefore}src="${rawUrl}"${attrsAfter}>`;
  });
}

function getNonce() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 32; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
