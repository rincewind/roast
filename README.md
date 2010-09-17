# Roast

by [The Lincolnshire Poacher](http://thelincolnshirepoacher.com)

Roast lets you use CommonJS `require` when compiling CoffeeScript for the web.


# Install

    npm install roast


# Usage

You have to require Roast at compile time.

    coffee --require roast --compile main.coffee

You can then use the `require` as you normally would.

    foo = require 'foo'
    baz = require('bar').baz

This will then produce the output:

    (function() {
      var baz, exports, foo;
      exports = {};
      foo = (function() {
      var beer, exports;
      exports = {};
      beer = true;
      exports.awesomeness = true;
      return exports;
    })();
    ;
      baz = (function() {
      var Baz, exports;
      exports = {};
      exports.baz = (function() {
        Baz = function() {
          'http://thelincolnshirepoacher.com';
          return this;
        };
        return Baz;
      })();
      return exports;
    })();
    .baz;

The output isn't pretty, but it works and is just waiting to be minified.

The path to required files is relative to the file you are requiring them from. For example, from `/main.coffee`, if you

    require 'src/foo'

Roast will look for `/src/foo.coffee`.

## License

Copyright (c) 2010 Chris Lloyd.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
