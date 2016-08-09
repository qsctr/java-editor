import * as fs from 'fs';

let path = 'node_modules/ace-builds/src-noconflict/ace.js';

try {
    fs.accessSync(path);
} catch (e) {
    path = 'node_modules/ace-builds/src-min-noconflict/ace.js';
}

const script = document.createElement('script');
script.src = path;
document.body.appendChild(script);