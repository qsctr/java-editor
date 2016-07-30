'use strict';

const editElem = document.querySelector('#editor');

let editor = ace.edit(editElem);
let session = editor.getSession();
session.setMode('ace/mode/java');

exports.open = code => {
    editor.setValue(code);
    editor.navigateFileStart();
    editor.focus();
};

exports.setTheme = theme => {
    editor.setTheme('ace/theme/' + theme);
};

exports.setFontSize = size => {
    editElem.style.fontSize = size;
};