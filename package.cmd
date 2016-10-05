@if [%1] == [] (
    @echo you must give an argument which is the version number
    goto :eof
)

call compile

for /f "delims=" %%v in ('node -p "require('./package.json').version"') do set current_version=%%v

if not [%1] == [%current_version%] (
    call npm --no-git-tag-version version %1
    @echo on
)

call electron-packager . --platform=win32 --arch=x64 --app-copyright="(c) 2016 Bretton" --build-version="%1" --icon="icon.ico" --ignore="Java-Editor.zip|node_modules/ace-builds/src$|node_modules/ace-builds/src-min$|node_modules/ace-builds/src-noconflict" --overwrite --win32metadata.CompanyName="" --win32metadata.FileDescription="Java Editor" --win32metadata.OriginalFileName="" --win32metadata.ProductName="Java Editor" --win32metadata.InternalName=""

jar -cMf Java-Editor.zip "Java Editor-win32-x64"