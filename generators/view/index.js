"use strict";

const Base 	= require('yeoman-generator').Base;
const yosay = require('yosay');
const chalk = require('chalk');
const fs 	= require('fs');
const path 	= require('path');
const util 	= require('util');


var tpl = {
	html : ["<% include public/header.html%>","\r\n",'welcome to @page','\r\n','<% include public/js.html%>','\r\n',"<script type=text/javascript>seajs.use('/page/index');</script>",'\r\n'].join(''),
	js   : '',
	less : '',
  controller:['module.exports = {\r\n',
                ' "/":function*(){\r\n',
                '     var pageData = {\r\n',
                '       css : ["css/@page.css"]\r\n',
                '     };',
                '     yield this.render("@page",pageData)\r\n',
                '   }\r\n',
                '}\r\n'].join('')
}


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
  askFor:function(){
  	var done = this.async();
  	var prompts = [{
        name: 'vn',
        message: 'What is your view name?'
        
      }, {
        name: 'includeCtl',
        message: 'Would you like to create a new controller?',
        type: 'confirm'
      }
    ];

    this.prompt(prompts, function (props) {
      this.name = props.vn;
      this.includeCtl = props.includeCtl;

      done();
    }.bind(this));
  },
  view: function () {
  	
  	
  },
  writing:function(){
  	var name = this.name;
	   
	   this.fs.write(`${this.destinationPath()}/view/${name}.html`,tpl.html.replace(/@page/ig,name));
	   this.fs.write(`${this.destinationPath()}/resource/es6/page/${name}.js`,tpl.js);
  	 this.fs.write(`${this.destinationPath()}/resource/less/${name}.less`,tpl.less);
     this.includeCtl && this.fs.write(`${this.destinationPath()}/controller/${name}.js`,tpl.controller.replace(/@page/ig,name));
     if(this.includeCtl && !fs.existsSync(`${this.destinationPath()}/controller/${name}.js`)){
        this.fs.write(`${this.destinationPath()}/controller/${name}.js`,tpl.controller.replace(/@page/ig,name));
      }
  }
})

