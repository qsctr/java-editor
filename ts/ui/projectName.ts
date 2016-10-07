export function change(name: string) {
    for (const elem of qsa('.project-name')) {
        elem.textContent = name;
    }
}