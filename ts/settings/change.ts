import * as editor from '../editor/editor';
import SettingsObject from './SettingsObject';

// This type declaration is not strictly necessary but can help when a new
// default setting is added and a change function is not or vice versa.

const change: SettingsObject = {
    editorTheme: editor.setTheme,
    editorFontSize: editor.setFontSize
}

export default change;