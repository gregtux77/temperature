var install = require('./lib/install.js');
var uninstall = require('./lib/uninstall.js');
var temperature = require('./lib/temperature.js');
var command = require('./lib/commande.js');

module.exports = function(sails) {


	 	
	return {
		temperature: temperature,
		install: install,
		uninstall: uninstall
	};
};


