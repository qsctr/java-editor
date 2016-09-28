window.addEventListener('resize', () => {
    ([...document.querySelectorAll('.mdl-dialog')] as HTMLElement[]).forEach(dialog => {
        dialog.style.top = dialog.style.bottom = (document.body.clientHeight - dialog.clientHeight) / 2 + 'px';
    });
});