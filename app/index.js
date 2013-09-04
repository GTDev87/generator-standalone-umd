'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var StandaloneUmdGenerator = module.exports = function StandaloneUmdGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(StandaloneUmdGenerator, yeoman.generators.Base);

StandaloneUmdGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'moduleName',
    message: 'Would you like to name your module?'
  }];

  this.prompt(prompts, function (props) {
    this.moduleName = props.moduleName;
    cb();
  }.bind(this));
};

StandaloneUmdGenerator.prototype.app = function app() {
  this.mkdir(this.moduleName + '/build');
  this.mkdir(this.moduleName + '/spec');
  this.mkdir(this.moduleName + '/spec/helpers');
  this.mkdir(this.moduleName + '/spec/' + this.moduleName);
  this.mkdir(this.moduleName + '/src');

  this.template('_package.json', this.moduleName + '/package.json');
  this.template('_gruntfile.js', this.moduleName + '/gruntfile.js');
  this.template('_module_template.spec.js', this.moduleName + '/spec/' + this.moduleName + '/' + this.moduleName + '.spec.js');
  this.template('_module_template.js', this.moduleName + '/src/' + this.moduleName + '.js');
  this.copy('_umd_test_helper.js', this.moduleName + '/spec/helpers/umd_helper.js');
};