'use strict';

const project = require('./project/project');

const drawer = document.querySelector('.mdl-layout__drawer');
const filesNav = document.querySelector('#files-nav');

exports.open = files => {
    [...filesNav.children].forEach(child => child.remove());
    files.forEach(exports.addFile);
};

exports.addFile = file => {
    let elem = document.createElement('div');
    elem.textContent = file;
    elem.classList.add('mdl-navigation__link', 'files-nav-file');
    elem.addEventListener('click', () => {
        project.select(file);
    });
    filesNav.appendChild(elem);
    adjustHeight();
};

window.addEventListener('resize', adjustHeight);

function adjustHeight() {
    let restHeight = R.sum([...drawer.children]
            .filter(child => child !== filesNav)
            .map(x => x.clientHeight));
    let filesCount = filesNav.children.length;
    [...filesNav.children].forEach(file => {
        file.style.paddingTop = file.style.paddingBottom =
                Math.min(16, Math.max(8, Math.floor((drawer.clientHeight
                - restHeight - 24 * filesCount) / filesCount / 2))) + 'px';
    });
}