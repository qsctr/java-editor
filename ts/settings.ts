import { remote } from 'electron';
import * as fs from 'fs';

const path = remote.app.getPath('userData') + '/settings.json';

const defaultSettings = {
    editorTheme: 'tomorrow_night_bright',
    editorFontSize: '16px'
};

let applyFunction: { [setting: string]: (value: any) => any; } = {};
let settings: typeof defaultSettings;
let exists: boolean;

try {
    fs.accessSync(path);
    exists = true;
} catch (e) {
    exists = false;
}

if (exists) {
    settings = JSON.parse(fs.readFileSync(path, 'utf-8'));
    fixMissing();
} else {
    settings = defaultSettings;
    write();
}

export function get() {
    return settings;
}

export function set(setting: string, value: any) {
    checkValid(setting);
    settings[setting] = value;
    applyFunction[setting](value);
    write();
}

export function setApplyFunction(setting: string, fun: (value: any) => any) {
    checkValid(setting);
    applyFunction[setting] = fun;
}

export function applyAll() {
    for (const setting in settings) {
        applyFunction[setting](settings[setting]);
    }
}

function write() {
    fs.writeFileSync(path, JSON.stringify(settings));
}

function fixMissing() {
    let changed = false;
    for (const setting in defaultSettings) {
        if (settings[setting] === null || settings[setting] === undefined) {
            settings[setting] = defaultSettings[setting];
            changed = true;
            console.warn(`Could not find setting ${setting}. Falling back to default.`);
        }
    }
    if (changed) {
        write();
    }
}

function checkValid(setting: string) {
    if (defaultSettings[setting] === undefined) {
        throw new Error(`${setting} is not a valid setting`);
    }
}