var sass = require('node-sass'),
    path = require('path'),
    deferred = require('deferred');

exports.extension = ['scss', 'sass'];
exports.type = 'css';

function compileSass(src, info) {
  var def = deferred();
  sass.render({
    data: src,
    includePaths: [path.dirname(info.filename)],
    success: function (css) {
      return def.resolve(css);
    },
    error: function (err) {
      return def.reject(new Error(err));
    }
  });
  return def.promise;
}

exports.compile = function (src, info) {
  return { code: compileSass(src, info) };
};
