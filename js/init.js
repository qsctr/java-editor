'use strict';

require('./onerror');

window.addEventListener('load', () => {

    require('./ui/dialogCenter');
    require('./ui/smoothLoad');
    require('./ui/noTabNav');
    require('./ui/windowControls');
    require('./settings/settings');
    require('./editor');
    require('./project/project');
    require('./buttons');
    
});
