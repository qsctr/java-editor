import { accessSync, statSync } from 'fs';

export default function exists(path: string) {
    try {
        accessSync(path);
        return true;
    } catch (e) {
        return false;
    }
}

export function isFile(path: string) {
    try {
        return statSync(path).isFile();
    } catch (e) {
        return false;
    }
}

export function isDirectory(path: string) {
    try {
        return statSync(path).isDirectory();
    } catch (e) {
        return false;
    }
}