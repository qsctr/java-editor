import createElement from '../utils/createElement';
import * as file from '../file';
import * as project from '../project';

const navElem = qs('#nav') as HTMLElement;
const openButton = qs('#nav-open-button');
const filesElem = qs('#nav-files');

let open = true;
let selectedFileElem: Element;

export function show() {
    navElem.style.width = '200px';
    open = true;
}

export function hide() {
    navElem.style.width = '0';
    open = false;
}

export function toggle() {
    if (open) {
        hide();
    } else {
        show();
    }
}

export function updateFiles(names: string[]) {
    while (filesElem.childElementCount > 0) {
        filesElem.firstElementChild.remove();
    }
    for (const name of names) {
        const fileElem = createElement('div', { class: 'nav-file' }, name);
        fileElem.addEventListener('click', () => {
            file.open(name);
        });
        filesElem.appendChild(fileElem);
    }
}

openButton.addEventListener('click', () => {
    project.openUsingDialog();
});

file.emitter.on('newFileOpened', (file: string) => {
    if (selectedFileElem !== undefined) {
        selectedFileElem.classList.remove('nav-file-selected');
    }
    const newFileElem = [...filesElem.children].find(elem => elem.textContent === file);
    if (newFileElem === undefined) {
        throw new Error(`Could not find element with text ${file} in #nav-files`);
    }
    selectedFileElem = newFileElem;
    selectedFileElem.classList.add('nav-file-selected');
});