import { readFileSync } from 'fs';
import * as editor from './ui/editor';
import safeEmitter from './utils/safeEmitter';
// import * as project from './project'; circular

const events = [
    'newFileOpened' // string
];

export const emitter = new (safeEmitter(events))();

export function open(file: string) {
    editor.open(readFileSync(`${require('./project').getCurrentProjectPath()}/${file}.java`, 'utf-8'));
    emitter.emit('newFileOpened', file);
}