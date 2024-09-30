console.log("webview.js", "INIT");

document.addEventListener('DOMContentLoaded', () => {
  const vscode = acquireVsCodeApi();
  const downloadBtn = document.getElementById('downloadBtn');  
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {

      downloadBtn.disabled = true;
      const repoLink = Array.from(document.querySelectorAll('.resources a')).find(link => link.textContent.trim() === 'Repository');
      const repoUrl = repoLink ? repoLink.href : 'no repo link found';
      const message = { command: 'download', url: repoUrl };
      vscode.postMessage(message);

      window.addEventListener('message', (event) => {
        const message = event.data;
        if (message.command === 'downloadComplete') {
          downloadBtn.disabled = false;
        }
      });

    });
  }
});
