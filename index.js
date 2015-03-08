#!/usr/bin/env node

var minimist = require('minimist');
var Mocha = require('mocha');
var child = require('child_process');

//-b, --brain, the brain module to test
//-r, --reporter, the mocha reporter to use
var opts = minimist(process.argv.slice(2), {
  alias: {
    b: 'brain',
    r: 'reporter'
  },
  default: {
    reporter: 'spec'
  }
});

var cp = child.spawn('./node_modules/.bin/mocha', ['--colors', '--reporter=' + opts.reporter, '--compilers=coffee:coffee-script/register', 'tests.js'], {
  stdio: 'inherit',
  env: {
    'BROBBOT_BRAIN_TESTS_BRAIN': opts.brain
  }
});
