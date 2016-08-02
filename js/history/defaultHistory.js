'use strict';

const fs = require('fs');

let gettingStarted;
try {
    fs.accessSync(gettingStarted = 'resources/app/GettingStarted');
} catch (e) {
    fs.accessSync(gettingStarted = 'GettingStarted');
}

module.exports = {
    projects: [
        gettingStarted
    ],
    cursorLocations: []
};