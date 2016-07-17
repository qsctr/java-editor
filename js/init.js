'use strict';

require('./onerror');
require('./settings/settings');

const editor = require('./editor');

editor.open(
`public class Test {
    
    public Test() {
        // this is a constructor
    }
    
}`
);