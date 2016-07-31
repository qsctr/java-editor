'use strict';

require('./onerror');

window.addEventListener('load', () => {

    require('./editor');
    require('./ui/dialogCenter');
    require('./ui/smoothLoad');
    require('./ui/noTabNav');
    require('./ui/windowControls');
    require('./settings/settings');
    require('./buttons');

    const project = require('./project/project');

    project.open('GettingStarted');
    
});
