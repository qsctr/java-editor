import { remote } from 'electron';
import * as fs from 'fs';
import exists from './utils/exists';
import safeEmitter from './utils/safeEmitter';

const path = remote.app.getPath('userData') + '/settings.json';

const defaultSettings = {
    editorTheme: 'tomorrow_night_bright',
    editorFontSize: '16px'
};

export const emitter = new (safeEmitter(Object.keys(defaultSettings)))();

let settings: typeof defaultSettings;

if (exists(path)) {
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
    emitter.emit(setting, value);
    settings[setting] = value;
    write();
}

export function applyAll() {
    for (const setting in settings) {
        emitter.emit(setting, settings[setting]);
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