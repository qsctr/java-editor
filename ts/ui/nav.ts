import * as project from '../project';

const navElem = qs('#nav') as HTMLElement;
const openButton = qs('#nav-open-button');

let open = true;

export function show() {
    navElem.style.width = '250px';
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

openButton.addEventListener('click', () => {
    project.openUsingDialog();
});