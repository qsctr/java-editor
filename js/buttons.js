'use strict';

const project = require('./project/project');

const drawer = document.querySelector('.mdl-layout__drawer');

drawer.querySelector('#open-project-button').addEventListener('click', () => {
    project.openByUserPick();
});