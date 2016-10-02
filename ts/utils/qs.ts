declare const qs: typeof document.querySelector;
declare const qsa: typeof document.querySelectorAll;

(window as any).qs = document.querySelector.bind(document);
(window as any).qsa = document.querySelectorAll.bind(document);