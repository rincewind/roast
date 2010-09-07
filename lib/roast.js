(function() {
  var fs, path;
  fs = require('fs');
  path = require('path');
  CoffeeScript.on('compile', function(task) {
    var preprocess;
    preprocess = function(fileName, src) {
      var dir, ext;
      CoffeeScript.compile(src, {
        fileName: fileName
      });
      dir = path.dirname(fileName);
      ext = path.extname(fileName);
      return src.replace(/( *)inline(\s+|\()['"]([^'"]+)['"](\s*)/g, function(_, indent, _, target) {
        var raw;
        target = path.join(dir, target + ext);
        raw = fs.readFileSync(target, 'utf8');
        src = preprocess(target, raw);
        return ("\n# inlined from " + (target) + "\n\n" + (src) + "\n").replace(/\n/g, "\n" + (indent));
      });
    };
    return (task.input = preprocess(task.file, task.input));
  });
})();
