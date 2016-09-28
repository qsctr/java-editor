call compile

call electron-packager . --overwrite --platform=win32 --arch=x64 --prune --version-string.CompanyName="" --version-string.FileDescription="Java Editor" --icon="icon.ico"

rem save space
cd Java Editor-win32-x64/resources/app
if exist .vscode/ rmdir /S /Q .vscode
if exist declarations/ rmdir /S /Q declarations
if exist ts/ rmdir /S /Q ts
if exist typings/ rmdir /S /Q typings
if exist .gitignore del .gitignore
if exist compile.cmd del compile.cmd
if exist compile.md del compile.md
if exist install.cmd del install.cmd
if exist Java-Editor.zip del Java-Editor.zip
if exist package.cmd del package.cmd
if exist README.md del README.md
if exist run.cmd del run.cmd
if exist tsconfig.json del tsconfig.json
if exist typings.json del typings.json
cd node_modules
if exist @types/ rmdir /S /Q @types
cd ace-builds
if exist src/ rmdir /S /Q src
if exist src-min/ rmdir /S /Q src-min
if exist src-noconflict/ rmdir /S /Q src-noconflict
cd ../../../../..

jar -cMf Java-Editor.zip "Java Editor-win32-x64"