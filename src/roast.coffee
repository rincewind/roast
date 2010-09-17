fs = require 'fs'
path = require 'path'

wrap_exports = (src) ->
  "exports = {}\n#{src}\nreturn exports\n"

CoffeeScript.on 'compile', (task) ->
  task.input = wrap_exports(task.input)

CoffeeScript.on 'success', (task) ->
  dir = path.dirname(task.file)
  ext = path.extname(task.file)

  task.output = task.output.replace /require(\s+|\()['"]([^'"]+)['"]\)?/g, (_, _, target) ->
    target = path.join(dir, target+ext)
    src = fs.readFileSync target, 'utf8'
    CoffeeScript.compile wrap_exports(src), {fileName: target}
