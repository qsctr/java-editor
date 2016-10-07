import * as file from '../file';

file.emitter.on('newFileOpened', (name: string) => {
    for (const elem of qsa('.file-name')) {
        elem.textContent = name;
    }
});