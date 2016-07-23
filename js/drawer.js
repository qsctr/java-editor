'use strict';

const project = require('./project/project');

const drawer = document.querySelector('.mdl-layout__drawer');
const filesNav = document.querySelector('#files-nav');

exports.open = files => {
    files.forEach(file => {
        let elem = document.createElement('div');
        elem.textContent = file;
        elem.classList.add('mdl-navigation__link', 'files-nav-file');
        elem.addEventListener('click', () => {
            project.select(file);
        });
        filesNav.appendChild(elem);
    });
};