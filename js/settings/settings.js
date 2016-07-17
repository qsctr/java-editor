'use strict';

const fs = require('fs');
const path =
    require('electron').remote.app.getPath('userData')
    + '/settings.json';

const defaultSettings = require('./default');
const change = require('./change');

let settings;
let exists;

try {
    fs.accessSync(path);
    exists = true;
} catch (e) {
    exists = false;
}

if (exists) {
    settings = JSON.parse(fs.readFileSync(path, 'utf-8'));
    checkAllExist();
} else {
    settings = defaultSettings;
    save();
}

for (let setting in settings) {
    change[setting](settings[setting]);
}

exports.get = () => settings;

exports.set = (setting, value) => {
    settings[setting] = value;
    change[setting](value);
    save();
};

function save(newSettings) {
    fs.writeFileSync(path, JSON.stringify(settings));
}

function checkAllExist() {
    let changed = false;
    for (let setting in defaultSettings) {
        if (settings[setting] === null
        || settings[setting] === undefined) {
            settings[setting] = defaultSettings[setting];
            change[setting](value);
            changed = true;
            console.warn(`Setting ${setting} does not exist. Falling back to default.`);
        }
    }
    if (changed) {
        save();
    }
}