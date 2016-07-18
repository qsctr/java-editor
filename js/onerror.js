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

onerror = (msg, url, line, col, err) => {
    // TODO: make this less repetitive
    dialog.querySelector('.msg').textContent = msg;
    dialog.querySelector('.url').textContent = url;
    dialog.querySelector('.line').textContent = line;
    dialog.querySelector('.col').textContent = col;
    dialog.querySelector('.err').textContent = err;
    if (!dialog.open) {
        dialog.showModal();
    }
};
