fs = require 'fs'
path = require 'path'

sys = require 'sys'

CoffeeScript.on 'compile', (task) ->
  # http://github.com/jashkenas/coffee-script/pull/672
  task.file = task.options.fileName

  preprocess = (fileName, src) ->
    CoffeeScript.compile src, {fileName}

    dir = path.dirname(fileName)
    ext = path.extname(fileName)

    src.replace /( *)inline(\s+|\()['"]([^'"]+)['"](\s*)/g, (_, indent, _, target) ->
      target = path.join(dir, target+ext)
      raw = fs.readFileSync target, 'utf8'
      src = preprocess target, raw

      "\n# inlined from #{target}\n\n#{src}\n".replace(/\n/g, "\n#{indent}")

  task.input = preprocess(task.file, task.input)
