import { app, BrowserWindow } from 'electron';

let mainWindow: Electron.BrowserWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: '#009688',
        minWidth: 300
    });

    mainWindow.setMenu(null);
    
    let parentDir = __dirname.slice(0, Math.max(
        __dirname.lastIndexOf('/'), __dirname.lastIndexOf('\\')));

    mainWindow.loadURL(`file://${parentDir}/index.html`);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

});

app.on('window-all-closed', () => {
    app.quit();
});
