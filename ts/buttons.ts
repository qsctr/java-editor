import * as project from './project/project';

const drawer = document.querySelector('.mdl-layout__drawer');

drawer.querySelector('#open-project-button').addEventListener('click', () => {
    project.openByUserPick();
});