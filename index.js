var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');

module.exports = function(sails) {


	 	
	return {
		temperature: temperature,
		install: install,
		uninstall: uninstall
	};
};


