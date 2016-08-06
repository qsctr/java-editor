rem save space
if exist "Java Editor-win32-x64/resources/app/Java-Editor.zip" rmdir /S /Q "Java Editor-win32-x64/resources/app/Java-Editor.zip"
rmdir /S /Q "Java Editor-win32-x64/resources/app/node_modules/ace-builds/src"
rmdir /S /Q "Java Editor-win32-x64/resources/app/node_modules/ace-builds/src-min"
rmdir /S /Q "Java Editor-win32-x64/resources/app/node_modules/ace-builds/src-min-noconflict"

jar -cMf "Java-Editor.zip" "Java Editor-win32-x64"