'use strict';

const fs = require('fs');

const pick = require('./pick');
const drawer = require('../drawer');
const editor = require('../editor');
const history = require('../history/history');

let currentProjectPath = null;
let currentProjectName = null;
let currentFile = null;

exports.openByUserPick = () => {
    let path = pick();
    if (path) {
        exports.open(path);
    }
};

exports.open = path => {
    currentProjectPath = path;
    currentProjectName = path.slice(Math.max(
            path.lastIndexOf('/'), path.lastIndexOf('\\')) + 1);
    [...document.querySelectorAll('.project-name')].forEach(x => {
        x.textContent = currentProjectName;
    });
    let files = fs.readdirSync(path)
            .filter(name => fs.statSync(path + '/' + name).isFile()
                    && name.slice(-5) === '.java')
            .map(name => name.slice(0, -5));
    drawer.open(files);
    exports.select(files[0]);
    history.addProject(path);
};

exports.select = file => {
    currentFile = file;
    editor.open(fs.readFileSync(
            `${currentProjectPath}/${file}.java`, 'utf-8'));
};

exports.getCurrentProjectPath = () => currentProjectPath;

exports.getCurrentProjectName = () => currentProjectName;

exports.getCurrentFile = () => currentFile;