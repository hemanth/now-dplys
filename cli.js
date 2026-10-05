#!/usr/bin/env node
'use strict';
const meow = ((m) => (m && m.default) ? m.default : m)(require('meow'));
const nowDplys = require('.');
const ora = require('ora');

const cli = meow(`
	Usage
	  $ now-dplys 
`);

const spinner = ora('Fetching your now deployments!').start();
nowDplys()
.then(dplys => {
	spinner.succeed();
  console.log(dplys.join('\n'));
})
.catch(err => {
	spinner.fail();
	console.error(err)
})
