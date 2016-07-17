'use strict';

const editElem = document.querySelector('#editor');

let editor = null;
let session;

window.addEventListener('load', () => {
    editor = ace.edit(editElem);
    session = editor.getSession();
    session.setMode('ace/mode/java');
});

exports.open = code => {
    afterLoaded(() => {
        editor.setValue(code);
    });
};

exports.setTheme = theme => {
    afterLoaded(() => {
        editor.setTheme('ace/theme/' + theme);
    });
};

exports.setFontSize = size => {
    editElem.style.fontSize = size;
};

function afterLoaded(callback) {
    if (editor !== null) {
        callback();
    } else {
        window.addEventListener('load', () => {
            callback();
        });
    }
}