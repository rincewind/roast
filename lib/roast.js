(function() {
  var fs, path, wrap_exports;
  fs = require('fs');
  path = require('path');
  wrap_exports = function(src) {
    return "exports = {}\n" + (src) + "\nreturn exports\n";
  };
  CoffeeScript.on('compile', function(task) {
    return (task.input = wrap_exports(task.input));
  });
  CoffeeScript.on('success', function(task) {
    var dir, ext;
    dir = path.dirname(task.file);
    ext = path.extname(task.file);
    return (task.output = task.output.replace(/require(\s+|\()['"]([^'"]+)['"]\)?/g, function(_, _, target) {
      var src;
      target = path.join(dir, target + ext);
      src = fs.readFileSync(target, 'utf8');
      return CoffeeScript.compile(wrap_exports(src), {
        fileName: target
      });
    }));
  });
})();
