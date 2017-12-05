var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');

module.exports = function(sails) {

	var temperature = require('./lib/temperature.js');
	 	
	return {
		temperature: temperature,
		install: install,
		uninstall: uninstall
	};
};


