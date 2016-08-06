rem save 23.84 MB of space, 13.8% of uncompressed version
rem 4.3 MB of space, 7.1% of compressed version
rmdir /S /Q "Java Editor-win32-x64/resources/app/node_modules/ace-builds/src"
rmdir /S /Q "Java Editor-win32-x64/resources/app/node_modules/ace-builds/src-min"
rmdir /S /Q "Java Editor-win32-x64/resources/app/node_modules/ace-builds/src-min-noconflict"

jar -cMf "Java-Editor.zip" "Java Editor-win32-x64"