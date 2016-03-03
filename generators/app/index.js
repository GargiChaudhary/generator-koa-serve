"use strict";

const Base 	= require('yeoman-generator').Base;
const yosay = require('yosay');
const chalk = require('chalk');
const fs 	= require('fs');
const path 	= require('path');
const util 	= require('util');


module.exports = Base.extend({
	constructor: function () {
	    Base.apply(this, arguments);

	    this.option('skip-install', {
	      desc:     'Whether dependencies should be installed',
	      defaults: false
	    });

	    this.option('skip-install-message', {
	      desc:     'Whether commands run should be shown',
	      defaults: false
	    });
	    
	    this.sourceRoot(path.join(path.dirname(this.resolved), 'templates'));
  },
  app: function () {
  	this.fs.copy([
      this.templatePath() + '/**',
      this.templatePath() + '/**/.*'
      ],
      this.destinationPath()
    );

    // Remove WCT if the user opted out
    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json'))
      

  },
  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      skipMessage: this.options['skip-install-message']
    });
  }
})

