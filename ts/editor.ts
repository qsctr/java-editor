import * as settings from './settings';

const elem = document.querySelector('#editor') as HTMLElement;
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

settings.setApplyFunction('editorTheme', setTheme);
settings.setApplyFunction('editorFontSize', setFontSize);

function adjustHeight() {
    elem.style.height = (window.innerHeight - (document.querySelector('#container').clientHeight - elem.clientHeight)) + 'px';
}

adjustHeight();
window.addEventListener('resize', adjustHeight);