'use strict';

const fs = require('fs');
const path = require('electron').remote.app.getPath('userData')
        + '/history.json';

const defaultHistory = require('./defaultHistory');

let history;
let exists;

try {
    fs.accessSync(path);
    exists = true;
} catch (e) {
    exists = false;
}

if (exists) {
    history = JSON.parse(fs.readFileSync(path, 'utf-8'));
} else {
    history = defaultHistory;
    save();
}

exports.get = () => history;

exports.add = (item, value) => {
    if (Array.isArray(history[item])) {
        history[item].unshift(value);
    }
}

function save(newHistory) {
    fs.writeFileSync(path, JSON.stringify(newHistory));
}