const currentWindow = require('electron').remote.getCurrentWindow();
const topHeader = document.querySelector('#top-header-row');

topHeader.querySelector('.minimize-button').addEventListener('click', () => {
    currentWindow.minimize();
});

topHeader.querySelector('.maximize-button').addEventListener('click', () => {
    if (currentWindow.isMaximized()) {
        currentWindow.unmaximize();
    } else {
        currentWindow.maximize();
    }
});

topHeader.querySelector('.close-button').addEventListener('click', () => {
    currentWindow.close();
});