# grunt-contrib-rubylint

Grunt task for validating Ruby code.

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
    src: ['**/*.{rb,ru}']
  }
});

grunt.loadNpmTasks('grunt-contrib-rubylint');
```

### Options

#### force

Type: `Boolean` Default value: `false`

Set `force` to true to report errors but not fail the task.

## License

MIT
