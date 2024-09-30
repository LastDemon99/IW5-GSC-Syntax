import * as vscode from 'vscode'; 
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';
import { SCRIPTS_FOLDER, isDownloadAllowedExtension } from './utility';

export async function showUrlInputBox() {
    const repoUrl = await vscode.window.showInputBox({
        prompt: 'Enter the file or directory GitHub URL',
        placeHolder: 'Example: https://github.com/LastDemon99/IW5-Sripts/tree/main/GSC/Utility'
    });
    if (!repoUrl) return;
    await downloadFilesFromGitHub(repoUrl, SCRIPTS_FOLDER);
}

export async function downloadFilesFromGitHub(repoUrl: string, savePath: string) {
    try {
        if (await downloadBlobFile(repoUrl, savePath)) return;
        if (!(await downloadTreeDirectory(repoUrl, savePath))) 
            vscode.window.showErrorMessage(`Download error or invalid URL.`);
    } catch (error) {
        vscode.window.showErrorMessage(`Download error or invalid URL: ${(error instanceof Error) ? error.message : ''}`);
    }
}

async function downloadBlobFile(repoUrl: string, savePath: string) {
    const match = repoUrl.match(/https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)/);        
    if (!match) return false;
    
    const [, user, repo, branch, filePath] = match;
    const rawUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${filePath}`;
    const fileName = path.basename(filePath);

    if (!isDownloadAllowedExtension(fileName)) {
        vscode.window.showErrorMessage(`File ${fileName} has an invalid extension. Only .gsc, .cfg, and .csv are allowed.`);
        return true;
    }

    try {
        const fileSavePath = path.join(savePath, fileName);
        const response = await axios.get(rawUrl, { responseType: 'arraybuffer' });
        fs.writeFileSync(fileSavePath, response.data);
        vscode.window.showInformationMessage(`File ${fileName} downloaded successfully.`);
    } catch (error) {
        vscode.window.showErrorMessage(`Error downloading file ${fileName}: ${(error instanceof Error) ? error.message : ''}`);
    }
    return true;
}

async function downloadTreeDirectory(repoUrl: string, savePath: string) {
    const match = repoUrl.match(/https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/tree\/([^\/]+)\/(.+)/);
    if (!match) return false;

    const [, user, repo, branch, dirPath] = match;
    const apiUrl = `https://api.github.com/repos/${user}/${repo}/git/trees/${branch}?recursive=1`;  // Fetch the entire tree in one request
    
    try {
        const response = await axios.get(apiUrl, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            }
        });
        
        const tree = response.data.tree;
        const filesToDownload = tree.filter((item: any) => 
            item.type === 'blob' && isDownloadAllowedExtension(item.path) && item.path.startsWith(dirPath)
        );

        if (!fs.existsSync(savePath)) {
            createDirRecursively(savePath);
        }

        await Promise.all(filesToDownload.map(async (file: any) => {
            const fileUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${file.path}`;
            const fileSavePath = path.join(savePath, path.basename(file.path));
            await downloadAndSaveFile(fileSavePath, fileUrl);
        }));

    } catch (error) {
        vscode.window.showErrorMessage(`Error downloading directory ${dirPath}: ${(error instanceof Error) ? error.message : ''}`);
    }
    return true;
}

async function downloadAndSaveFile(filePath: string, fileUrl: string) {
    try {
        const response = await axios.get(fileUrl, { responseType: 'arraybuffer' });
        fs.writeFileSync(filePath, response.data);
        vscode.window.showInformationMessage(`File ${path.basename(filePath)} downloaded successfully.`);
    } catch (error) {
        vscode.window.showErrorMessage(`Error downloading file ${path.basename(filePath)}: ${(error instanceof Error) ? error.message : ''}`);
    }
}

function createDirRecursively(directory: string) {
    const parentDir = path.dirname(directory);
    if (!fs.existsSync(parentDir)) {
        createDirRecursively(parentDir);
    }
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }
}
