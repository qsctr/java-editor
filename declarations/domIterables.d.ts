// there is a bug in typescript 2.0 where these declarations (in lib.dom.iterable.d.ts)
// are not allowed to be included when a custom --lib option is given
// it will be fixed in 2.1

interface DOMTokenList {
    [Symbol.iterator](): IterableIterator<string>;
}

interface NodeList {
    [Symbol.iterator](): IterableIterator<Node>
}

interface NodeListOf<TNode extends Node> {
    [Symbol.iterator](): IterableIterator<TNode>
}