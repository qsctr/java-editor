import './onerror';
import './editor/loadAce';

window.addEventListener('load', () => {

    // the import statement cannot be used as these are imported dynamically

    require('./editor/editor');
    require('./ui/dialogCenter');
    require('./ui/smoothLoad');
    require('./ui/noTabNav');
    require('./ui/windowControls');

    // set all the settings first, even though init does not use any settings
    require('./settings/settings');

    require('./buttons');

    const project = require('./project/project');

    project.openDefault();
    
});
