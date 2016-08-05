// A temporary fix for using ParentNode.children until this is merged
// https://github.com/Microsoft/TSJS-lib-generator/pull/137

interface Element {
    /**
     * Returns the child elements.
     */
    children: HTMLCollection;
}