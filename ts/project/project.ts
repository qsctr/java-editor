import * as fs from 'fs';
import pick from './pick';
import * as drawer from '../drawer';
import * as editor from '../editor/editor';
import showSnackbar from '../ui/snackbar';

let currentProjectPath: string = null;
let currentProjectName: string = null;
let currentFile: string = null;

export function openByUserPick() {
    const path = pick();
    if (path) {
        open(path);
    }
}

export function open(path: string) {
    currentProjectPath = path;
    currentProjectName = path.slice(Math.max(
        path.lastIndexOf('/'), path.lastIndexOf('\\')) + 1);
    [...document.querySelectorAll('.project-name')].forEach(x => {
        x.textContent = currentProjectName;
    });
    const files = fs.readdirSync(path)
        .filter(name => fs.statSync(path + '/' + name).isFile()
            && name.slice(-5) === '.java')
        .map(name => name.slice(0, -5));
    if (files.length === 0) {
        showSnackbar({
            message: 'No .java files found in this folder'
        });
        return;
    }
    drawer.open(files);
    select(files[0]);
}

export function openDefault() {
    let path: string;
    try {
        fs.accessSync(path = 'resources/app/GettingStarted');
    } catch (e) {
        fs.accessSync(path = 'GettingStarted');
    }
    open(path);
}

export function select(file: string) {
    currentFile = file;
    editor.open(fs.readFileSync(
        `${currentProjectPath}/${file}.java`, 'utf-8'));
}

export const getCurrentProjectPath = () => currentProjectPath;

export const getCurrentProjectName = () => currentProjectName;

export const getCurrentFile = () => currentFile;