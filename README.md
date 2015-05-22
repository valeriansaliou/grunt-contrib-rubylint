# grunt-contrib-rubylint

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/valeriansaliou/grunt-contrib-rubylint?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Grunt task for validating Ruby code.


[![Build Status](https://travis-ci.org/valeriansaliou/grunt-contrib-rubylint.svg?branch=master)](https://travis-ci.org/valeriansaliou/grunt-contrib-rubylint)


## Getting started

You need to have the `ruby-lint` command available on your system.

```
gem install ruby-lint
```

This plugin requires Grunt `~0.4.0`

```
npm install grunt-contrib-rubylint --save-dev
```

```javascript
grunt.loadNpmTasks('grunt-contrib-rubylint');
```

## Usage

```javascript
grunt.initConfig({
  rubylint: {
    options: {
      levels: 'error'
    },

    src: ['**/*.{rb,ru}']
  }
});

grunt.loadNpmTasks('grunt-contrib-rubylint');
```

### Options

#### force

Type: `Boolean` Default value: `false`

Set `force` to true to report errors but not fail the task.

#### levels

Type: `String` Default value: `error`

Set `levels` to one of the following:

 * error
 * info
 * warning

#### analysis

Type: `Object` Default value: `[]`

Set `analysis` to true to report errors but not fail the task.

If no value is set, all classes are used.

Else, pick the classes you want to use in the following list:

 * argument_amount
 * pedantics
 * shadowing_variables
 * undefined_methods
 * undefined_variables
 * unused_variables
 * useless_equality_checks


## License

This package is published under the MIT license.
