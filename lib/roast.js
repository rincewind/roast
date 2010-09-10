(function() {
  var fs, path;
  fs = require('fs');
  path = require('path');
  CoffeeScript.on('compile', function(task) {
    var inline;
    task.file = task.options.fileName;
    inline = function(fileName, src) {
      var dir, ext;
      CoffeeScript.compile(src, {
        fileName: fileName
      });
      dir = path.dirname(fileName);
      ext = path.extname(fileName);
      return src.replace(/( *)inline(\s+|\()['"]([^'"]+)/g, function(_, indent, _, target) {
        var raw;
        target = path.join(dir, target + ext);
        raw = fs.readFileSync(target, 'utf8');
        src = inline(target, raw);
        return ("\n# inlined from " + (target) + "\n\n" + (src) + "\n").replace(/\n/g, "\n" + (indent));
      });
    };
    return (task.input = inline(task.file, task.input));
  });
})();
