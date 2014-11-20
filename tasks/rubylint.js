module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('rubylint', 'Lint Ruby files', function() {
    var exec = require('child_process').exec,
        done = this.async(),
        files = this.filesSrc,
        options = this.options({ force: false }),
        runs = 0;

    files.forEach(function(filepath) {
      grunt.verbose.writeln('Linting ' + filepath);

      exec('ruby-lint ' + filepath, function(err, stdout, stderr) {
        if(null !== err) {
          grunt.log.error(err);
        }

        if(++runs === files.length) {
          if(this.errorCount) {
            return done(options.force);
          }

          grunt.log.ok(files.length + ' file' + (files.length === 1 ? '' : 's') + ' lint free.');
          done();
        }
      }.bind(this));
    }.bind(this));
  });
};
