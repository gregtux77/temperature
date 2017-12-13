var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');
var temperature = require('./lib/temperature.js');
var exec = require('./lib/exec.js');
    
    
      
   
module.exports = function(sails) {


	 	
	return {
		exec: exec,
		temperature: temperature,
		install: install,
		uninstall: uninstall
		
	};
};


