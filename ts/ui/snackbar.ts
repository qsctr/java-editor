const snackbar = (qs('.mdl-snackbar') as MDLSnackbarElement).MaterialSnackbar;

export default function (data: MaterialToastData): void;
export default function (data: MaterialSnackbarData): void;
export default function (data: string): void;
export default function (data: any) {
    if (typeof data === 'string') {
        snackbar.showSnackbar({
            message: data,
            timeout: 4000 // TODO: make this dependent on the message length
        });
    } else {
        snackbar.showSnackbar(data);
    }
}