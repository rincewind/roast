# Roast

by [The Lincolnshire Poacher](http://thelincolnshirepoacher.com)


When compiling CoffeeScript it's difficult to combine several files into one. Roast gives you the `inline` command. Compile your main JS file, and `inline` all the rest.


# Install

    npm install roast


# Usage

You have to require Roast at compile time.

    coffee --require roast --compile main.coffee

You can then use the `inline` command provided by Roast:

    # main.coffee
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
        var page_title;
        return (page_title = 'The Lincolnshire Poacher');
      });
    })();

As it sounds, `inline` just inlines files before CoffeeScript compiles them.


## License

Copyright (c) 2010 Chris Lloyd.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

