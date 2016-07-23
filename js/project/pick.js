'use strict';

const remote = require('electron').remote;
const dialog = remote.dialog;
const currentWindow = remote.getCurrentWindow();
const app = remote.app;

module.exports = () => {
    let result = dialog.showOpenDialog(currentWindow, {
        title: 'Choose a project folder',
        defaultPath: app.getPath('documents'),
        buttonLabel: 'Select',
        properties: ['openDirectory']
    });
    if (result) {
        return result[0];
    }
    return null;
};
