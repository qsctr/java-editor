import { shell, remote } from 'electron';
const app = remote.app;

const dialog =
    document.querySelector('#internal-error-dialog') as HTMLDialogElement;

dialog.querySelector('.submit-issue').addEventListener('click', () => {
    shell.openExternal('https://github.com/qsctr/java-editor/issues/new');
});

dialog.querySelector('.restart').addEventListener('click', () => {
    app.relaunch();
    app.quit();
});

dialog.querySelector('.close-and-continue').addEventListener('click', () => {
    dialog.close();
});

window.addEventListener('error', (event: ErrorEvent) => {
    dialog.querySelector('.error-stack').textContent =
        event.error.stack.replace(' at ', '\n    at ');
    if (!dialog.open) {
        dialog.showModal();
    }
});