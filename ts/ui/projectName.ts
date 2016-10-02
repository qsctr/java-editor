import * as project from '../project';

project.emitter.on('newProjectName', (name: string) => {
    for (const elem of qsa('.project-name')) {
        elem.textContent = name;
    }
});