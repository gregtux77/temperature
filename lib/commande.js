var temperature = require('./temperature.js');

module.exports = function command(scope) {
	
	switch(scope.label) {
        case 'temperature':
			temperature();
        break;
        
         default:

        break;
    }
};
