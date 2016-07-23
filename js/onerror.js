'use strict';

const electron = require('electron');
const shell = electron.shell;
const app = electron.remote.app;

let dialog = document.querySelector('#internal-error-dialog');

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

onerror = (...info) => {
    info.forEach((x, i) => {
        dialog.querySelectorAll('.error-info')[i].textContent = x;
    });
    if (!dialog.open) {
        dialog.showModal();
    }
};
