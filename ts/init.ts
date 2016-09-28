import './errorDialog';
import './dialogCenter';
import './loadAceScript';
import './topBar';
import './nav';

window.addEventListener('load', () => {
    require('./editor');
    require('./settings').applyAll();
    require('./showPage');
});