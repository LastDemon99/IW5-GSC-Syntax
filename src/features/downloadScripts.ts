import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import axios from 'axios';

export async function showUrlInputBox(scriptsPath: string) {
    const repoUrl = await vscode.window.showInputBox({
        prompt: 'Enter the file or directory GitHub URL',
        placeHolder: 'Example: https://github.com/LastDemon99/IW5-Sripts/tree/main/GSC/Utility'
    });
    if (!repoUrl) return;
    await downloadFilesFromGitHub(repoUrl, scriptsPath);
}

async function downloadFilesFromGitHub(repoUrl: string, savePath: string) {
    try {
        if (await downloadBlobFile(repoUrl, savePath)) return;    
        if (!(await downloadTreeDirectory(repoUrl, savePath))) 
            vscode.window.showErrorMessage(`Download error or invalid Url.`);
    } catch (error) {
        if (error instanceof Error) {
            vscode.window.showErrorMessage(`Download error or invalid Url: ${error.message}`);
        } else {
            vscode.window.showErrorMessage(`Download error or invalid Url.`);
        }
    }
}

async function downloadBlobFile(repoUrl: string, savePath: string) {
    const match = repoUrl.match(/https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)/);        
    if (!match) return false;
    
    const [_, user, repo, branch, dir] = match;
    const rawUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/${dir}`;
    const fileName = path.basename(dir);

    try {
        const filePath = path.join(savePath, fileName);
        const response = await axios.get(rawUrl, { responseType: 'arraybuffer' });
        fs.writeFileSync(filePath, response.data);
        vscode.window.showInformationMessage(`File ${fileName} downloaded successfully.`);
    } catch (error) {
        if (error instanceof Error) {
            vscode.window.showErrorMessage(`Error when downloading file ${fileName}: ${error.message}`);
        } else {
            vscode.window.showErrorMessage(`Error when downloading file ${fileName}.`);
        }
    }
    return true;
}

async function downloadTreeDirectory(repoUrl: string, savePath: string) {
    const match = repoUrl.match(/https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/tree\/([^\/]+)\/(.+)/);
    if (!match) return false;

    const [_, user, repo, branch, dir] = match;
    const apiUrl = `https://api.github.com/repos/${user}/${repo}/contents/${dir}?ref=${branch}`;
    const dirPath = path.basename(dir);
    
    try {
        const apiUrl_response = await axios.get(apiUrl, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            }
        });

        const files = apiUrl_response.data;

        if (!fs.existsSync(savePath))
            fs.mkdirSync(savePath);

        for (const file of files) {
            if (file.type === 'dir') {
                const dir = savePath + '\\' + file.name;
                await downloadFilesFromGitHub(repoUrl + '/' + file.name, dir);
            }
            else if (file.type === 'file' && file.download_url) {
                await downloadAndSaveFile(savePath, file.download_url, file.name);
            }
        }
    } catch (error) {
        if (error instanceof Error) {
            vscode.window.showErrorMessage(`Error when downloading directory ${dirPath}: ${error.message}`);
        } else {
            vscode.window.showErrorMessage(`Error when downloading directory ${dirPath}.`);
        }
    }
    return true;
}

async function downloadAndSaveFile(savePath: string, fileUrl: string, fileName: string) {
    try {
        const response = await axios.get(fileUrl, { responseType: 'arraybuffer' });
        const filePath = path.join(savePath, fileName);
        fs.writeFileSync(filePath, response.data);
        vscode.window.showInformationMessage(`File ${fileName} downloaded successfully.`);
    } catch (error) {
        if (error instanceof Error) {
            vscode.window.showErrorMessage(`Error when downloading file ${fileName}: ${error.message}`);
        } else {
            vscode.window.showErrorMessage(`Error when downloading file ${fileName}`);
        }
    }
}
