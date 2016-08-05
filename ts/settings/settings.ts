import * as fs from 'fs';
import { remote } from 'electron';
import defaultSettings from './default';
import change from './change';

const path = remote.app.getPath('userData') + '/settings.json';

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
    checkAllExist();
} else {
    settings = defaultSettings;
    save();
}

for (const setting in settings) {
    change[setting](settings[setting]);
}

export function get() {
    return settings;
}

// ideally the type of value would be typeof settings[setting] but typescript
// doesn't allow it
export function set(setting: string, value: any) {
    settings[setting] = value;
    change[setting](value);
    save();
}

function save() {
    fs.writeFileSync(path, JSON.stringify(settings));
}

function checkAllExist() {
    let changed = false;
    for (const setting in defaultSettings) {
        if (settings[setting] === null
                || settings[setting] === undefined) {
            settings[setting] = defaultSettings[setting];
            change[setting](settings[setting]);
            changed = true;
            console.warn(`Setting ${setting} does not exist. Falling back to default.`);
        }
    }
    if (changed) {
        save();
    }
}