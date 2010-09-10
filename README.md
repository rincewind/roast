# Roast

by [The Lincolnshire Poacher](http://thelincolnshirepoacher.com)


When compiling CoffeeScript it's difficult to combine several files into one. Roast gives you the `inline` command. Compile your main JS file, and `inline` all the rest.


# Install

    npm install roast


# Usage

You have to require Roast at compile time.

    coffee --require roast --compile main.coffee

You can then use the `inline` command provided by Roast:

    inline 'helpers'

    $ ->
      inline 'constants'

This will then produce the output:

    (function() {
      var delay;
      delay = function(ms, fn) {
        return setTimeout(fn, ms);
      };
      $(function() {
        var homepage;
        return (homepage = 'http://thelincolnshirepoacher.com');
      });
    })();

Just as it sounds, `inline` just inlines files before CoffeeScript compiles them. Just note that Roast works at compile time, so you can't pass `inline` a variable or an interpolated string, it only takes constant strings.

To make things easier, the path to inlined files is relative to the file you are inlining them to. For example, from `/main.coffee`, if you

    inline 'src/foo'

Roast will look for `/src/foo.coffee`.

## License

Copyright (c) 2010 Chris Lloyd.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

