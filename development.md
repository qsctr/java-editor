Note: For Windows only (for now).

## Setup

Install node.js and npm.

https://nodejs.org/

Open cmd in project root.

Install npm dependencies.

    npm install

Install TypeScript.

    npm install -g typescript@1.8.10
    
Install typings.

    npm install -g typings@1.3.2
    
Install typings dependencies.

    typings install
    
Install electron-packager.

    npm install -g electron-packager@7.4.0
    
## Development

Open cmd in project root.

To compile typescript files (in ./ts only):
    
- If you are using Visual Studio Code press `Ctrl + Shift + B`

- Or you can run `compile`

To run the app:

    run
    
To package and zip the app

    package
    
You need to have JDK installed and the JDK bin directory in your PATH because `zip` uses `jar` to zip.
