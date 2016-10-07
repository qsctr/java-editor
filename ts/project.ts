import { remote } from 'electron';
import { readdirSync } from 'fs';
import snackbar from './ui/snackbar';
import { isDirectory, isFile } from './utils/exists';
import safeEmitter from './utils/safeEmitter';
import * as file from './file';

const dialog = remote.dialog;
const currentWindow = remote.getCurrentWindow();
const app = remote.app;

const events = [
    'newProjectName', // string
    'newProjectFiles' // string[]
];

export const emitter = new (safeEmitter(events))();

let currentProjectPath: string;

export function getCurrentProjectPath() {
    return currentProjectPath;
}

export function openUsingDialog() {
    const result = dialog.showOpenDialog(currentWindow, {
        title: 'Choose a project folder',
        defaultPath: app.getPath('documents'),
        buttonLabel: 'Select',
        properties: ['openDirectory']
    });
    if (result) {
        open(result[0]);
    }
}

export function open(path: string) {
    if (!isDirectory(path)) {
        return snackbar(`${path} is not a valid directory`);
    }
    const fileNames = readdirSync(path).filter(name => isFile(`${path}/${name}`) && name.slice(-5) === '.java').map(name => name.slice(0, -5));
    if (fileNames.length === 0) {
        return snackbar(`${path} has no Java source files`);
    }
    currentProjectPath = path;
    emitter.emit('newProjectName', path.slice(Math.max(path.lastIndexOf('/'), path.lastIndexOf('\\')) + 1));
    emitter.emit('newProjectFiles', fileNames);
    file.open(fileNames[0]);
}