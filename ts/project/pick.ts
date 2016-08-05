import { remote } from 'electron';

const dialog = remote.dialog;
const currentWindow = remote.getCurrentWindow();
const app = remote.app;

export default function pick() {
    const result = dialog.showOpenDialog(currentWindow, {
        title: 'Choose a project folder',
        defaultPath: app.getPath('documents'),
        buttonLabel: 'Select',
        properties: ['openDirectory']
    });
    if (result) {
        return result[0];
    }
    return null;
}
