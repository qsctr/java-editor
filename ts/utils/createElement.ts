export default function (name: string, attrs: { [attr: string]: string; } = {}, text?: string) {
    const elem = document.createElement(name);
    for (const attr in attrs) {
        elem.setAttribute(attr, attrs[attr]);
    }
    if (text) {
        elem.textContent = text;
    }
    return elem;
}