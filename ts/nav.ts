const navElem = document.querySelector('#nav') as HTMLElement;

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