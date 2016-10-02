import * as settings from '../settings';

const elem = qs('#editor') as HTMLElement;
const editor = ace.edit(elem);
const session = editor.getSession();
session.setMode('ace/mode/java');

export function open(code: string) {
    editor.setValue(code, -1);
    editor.focus();
}

export function setTheme(theme: string) {
    editor.setTheme('ace/theme/' + theme);
}

export function setFontSize(size: string) {
    elem.style.fontSize = size;
}

settings.emitter.on('editorTheme', setTheme);
settings.emitter.on('editorFontSize', setFontSize);

function adjustHeight() {
    elem.style.height = (window.innerHeight - (qs('#container').clientHeight - elem.clientHeight)) + 'px';
}

adjustHeight();
window.addEventListener('resize', adjustHeight);