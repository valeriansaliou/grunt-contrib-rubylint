module.exports = function(grunt) {
  'use strict';

  var error_log_fn = function(level, filepath, stderr, stdout) {
    grunt.log.error('\n');

    if(level === 1) {
      grunt.log.error('Validation error in ' + filepath);
    } else {
      grunt.log.error('Lint error in ' + filepath);
    }

    if(stderr || stdout) {
      var output_split = (stderr + '\n' + stdout).trim().split('\n');

      for(var i = 0; i < output_split.length; i++) {
        grunt.log.error(output_split[i] ? ' - ' + output_split[i] : '');
      }
    }
  };

  var lint_gen_args_fn = function(options) {
    var args_str = '';

    // Levels
    if(typeof options.levels === 'string') {
      switch(options.levels) {
        case 'error':
        case 'info':
        case 'warning':
          break;

        default:
          options.levels = 'error';
      }

      args_str += ' --levels=' + options.levels;
    }

    // Analysis
    if(typeof options.analysis === 'object' && options.analysis.length) {
      args_str += ' --analysis=' + options.analysis.join(',');
    }

    return args_str;
  };

  grunt.registerMultiTask('rubylint', 'Lint Ruby files', function() {
    var exec = require('child_process').exec,
        done = this.async(),
        files = this.filesSrc,
        runs = 0,
        options = this.options({
          force: false,
          levels: 'error',
          analysis: []
        });

    files.forEach(function(filepath) {
      grunt.verbose.writeln('Linting ' + filepath);

      // First try to parse the file
      exec('ruby -c ' + filepath, function(err, stdout, stderr) {
        ++runs;

        if(null !== err) {
          error_log_fn(1, filepath, stderr, stdout);
        }

        // Then, lint the file
        exec(
          'ruby-lint ' + filepath + ' ' + lint_gen_args_fn(options),
          function(err, stdout, stderr) {
            if(null !== err) {
              error_log_fn(2, filepath, stderr, stdout);
            }

            if(runs === files.length) {
              if(this.errorCount) {
                return done(options.force);
              }

              grunt.log.ok(
                files.length +
                ' file' + (files.length === 1 ? '' : 's') +
                ' lint free.'
              );

              done();
            }
          }.bind(this)
        );
      }.bind(this));
    }.bind(this));
  });
};
