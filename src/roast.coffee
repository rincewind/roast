fs = require 'fs'
path = require 'path'

CoffeeScript.on 'compile', (task) ->
  # Bug: http://github.com/jashkenas/coffee-script/pull/672
  if CoffeeScript.VERSION <= '0.9.2' then task.file = task.options.fileName

  inline = (fileName, src) ->
    # Precompiles the original source file to provide pretty errors.
    # Small compile time loss is gained in debug time.
    CoffeeScript.compile src, {fileName}

    dir = path.dirname(fileName)
    ext = path.extname(fileName)

    src.replace /( *)inline(\s+|\()['"]([^'"]+)['"]\)?/g, (_, indent, _, target) ->

      # All inlined files are inlined *relative* to the inlinee
      target = path.join(dir, target+ext)
      raw = fs.readFileSync target, 'utf8'
      src = inline target, raw

      "\n# inlined from #{target}\n\n#{src}\n".replace(/\n/g, "\n#{indent}")

  task.input = inline(task.file, task.input)
