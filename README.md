# webmake-sass

## Require SASS files with [Webmake](https://github.com/medikoo/modules-webmake)

To use this extension, install it aside of Webmake:

    $ npm install webmake-sass

If you use global installation of Webmake, then extension also needs to be installed globally:

    $ npm install -g webmake-sass

When running Webmake, ask webmake to use it:

    $ webmake --ext=sass program.js bundle.js

Same way when Webmake is used programmatically:

    webmake(inputPath, { ext: 'sass' }, cb);

webmake-sass can be used with any other Webmake extension, e.g.:

    $ webmake --ext=sass --ext=otherext program.js bundle.js

Programmatically:

    require('./path/to/sassfile'); // injects the resulting CSS automatically into the current page
