
const vscode = require('vscode');

function activate(context: { subscriptions: any[]; }) {
  let disposable = vscode.commands.registerCommand('sortJSONOnSave.enable', () => {
    let config = vscode.workspace.getConfiguration();
    config.update('editor.formatOnSave', true);
    config.update('editor.defaultFormatter', 'esbenp.prettier-vscode');
    config.update('editor.formatOnSaveMode', 'modifications');
    config.update('editor.codeActionsOnSave', {
      'source.sortJSON': true
    });
  });
  context.subscriptions.push(disposable);

  disposable = vscode.commands.registerCommand('sortJSONOnSave.disable', () => {
    let config = vscode.workspace.getConfiguration();
    config.update('editor.formatOnSave', false);
    config.update('editor.defaultFormatter', '');
    config.update('editor.formatOnSaveMode', 'file');
    config.update('editor.codeActionsOnSave', {
      'source.sortJSON': false
    });
  });
  context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() { }
exports.deactivate = deactivate;

