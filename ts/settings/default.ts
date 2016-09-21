import SettingsObject from './SettingsObject';

// This type declaration is not strictly necessary but can help when a new
// default setting is added and a change function is not or vice versa.

const defaultSettings: SettingsObject = {
    editorTheme: 'tomorrow_night_bright',
    editorFontSize: '15px'
}

export default defaultSettings;