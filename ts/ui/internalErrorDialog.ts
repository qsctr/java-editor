import { shell, remote } from 'electron';
const app = remote.app;

const dialog = qs('#internal-error-dialog') as HTMLDialogElement;

qs('#internal-error-dialog-submit-issue').addEventListener('click', () => {
    shell.openExternal('https://github.com/qsctr/java-editor/issues/new');
});

qs('#internal-error-dialog-restart').addEventListener('click', () => {
    app.relaunch();
    app.quit();
});

qs('#internal-error-dialog-close-and-continue').addEventListener('click', () => {
    dialog.close();
});

window.addEventListener('error', (event: ErrorEvent) => {
    qs('#internal-error-dialog-error-stack').textContent = event.error.stack.replace(' at ', '\n    at ');
    if (!dialog.open) {
        dialog.showModal();
    }
});