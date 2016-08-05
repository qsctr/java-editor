import { remote } from 'electron';

const currentWindow = remote.getCurrentWindow();
const windowBar = document.querySelector('#window-bar') as HTMLElement;
const layout = document.querySelector('.mdl-layout');

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

adjustLeftPadding();

window.addEventListener('resize', adjustLeftPadding);

function adjustLeftPadding() {
    windowBar.style.paddingLeft =
        layout.classList.contains('is-small-screen') ? '16px' : '40px';
}