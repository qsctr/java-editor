call electron-packager . --overwrite --platform=win32 --arch=x64 --prune --version-string.CompanyName="" --version-string.FileDescription="Java Editor" --icon="icon.ico"

rem save space
cd Java Editor-win32-x64/resources/app
if exist Java-Editor.zip del Java-Editor.zip
cd node_modules/ace-builds
if exist src/ rmdir /S /Q src
if exist src-min/ rmdir /S /Q src-min
if exist src-noconflict/ rmdir /S /Q src-noconflict
cd ../../../../..

jar -cMf Java-Editor.zip "Java Editor-win32-x64"