import * as vscode from 'vscode';

export let diagnosticCollection = vscode.languages.createDiagnosticCollection('gsc');
export let diagnosticsMap = new Map<string, vscode.Diagnostic[]>();

export function update() {
    diagnosticCollection.clear();
    vscode.window.visibleTextEditors.forEach(editor => {
        const uri = editor.document.uri;
        const diags = diagnosticsMap.get(uri.toString());
        if (diags) diagnosticCollection.set(uri, diags);
    });
}

export function relatedInfo(uri: vscode.Uri, range: vscode.Range, message: string): vscode.DiagnosticRelatedInformation {
    return new vscode.DiagnosticRelatedInformation(new vscode.Location(uri, range), message);
}

export function add(uri: vscode.Uri, range: vscode.Range, message: string, severity: vscode.DiagnosticSeverity, relatedInfo?: vscode.DiagnosticRelatedInformation) {
    const diagnostic = new vscode.Diagnostic(range, message, severity);
    if (relatedInfo) diagnostic.relatedInformation = [relatedInfo];
    diagnostic.source = 'gsc-syntax';
    const uriKey = uri.toString();
    if (!diagnosticsMap.has(uriKey)) diagnosticsMap.set(uriKey, []);
    //diagnosticsMap.get(uriKey)?.push(diagnostic);
    //update();
}

export function clear(uri: vscode.Uri) {
    diagnosticsMap.delete(uri.toString());
}
