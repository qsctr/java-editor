const editElem = document.querySelector('#editor') as HTMLElement;

const editor = ace.edit(editElem);
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
    editElem.style.fontSize = size;
}