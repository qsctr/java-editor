'use strict';

const currentWindow = require('electron').remote.getCurrentWindow();
const windowBar = document.querySelector('#window-bar');

windowBar.querySelector('.minimize-button').addEventListener('click', () => {
    currentWindow.minimize();
});

windowBar.querySelector('.maximize-button').addEventListener('click', () => {
    if (currentWindow.isMaximized()) {
        currentWindow.unmaximize();
    } else {
        currentWindow.maximize();
    }
});

windowBar.querySelector('.close-button').addEventListener('click', () => {
    currentWindow.close();
});