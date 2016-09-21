document.querySelector('.mdl-layout__drawer-button')
    .removeAttribute('tabindex');
([...document.querySelectorAll('.mdl-layout__header button')] as HTMLElement[])
    .forEach(x => {
        x.tabIndex = -1;
    });