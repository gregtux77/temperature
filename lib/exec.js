const Promise = require('bluebird');

const retry = 4;

// wait time between signals in ms
const waitTimeBetweenSignals = 200;

module.exports = function(params){

	// if module serial is not present, we cannot contact the arduino
	if(!gladys.modules.serial || typeof gladys.modules.serial.sendCode !== 'function') {
		sails.log.error(`You need to install the serial module in Gladys.`);
		return Promise.reject(new Error('DEPENDENCY_MISSING'));
	}

	var code = parseInt(params.deviceType.identifier) + parseInt(params.state.value);

	// radio is not secure transmision, we send the signals many time to be sure the signal is sent
	for (var i = 0; i <= retry; i++) {
		setTimeout(function(){ 
			gladys.modules.serial.sendCode(`{"function_name":"SendRadioCode","prise":"${prise}","etat":"${etat}"}%`);
		}, i * waitTimeBetweenSignals);
	}
  
  	for (var i = 0; i <= retry; i++) {
		setTimeout(function(){ 
			gladys.modules.serial.sendCode(`{"function_name":"temperature"}%`);
		}, i * waitTimeBetweenSignals);
		
		//module.exports =  function temperature() {
                // do something here
                gladys.deviceType.getById({id: 18})
                        .then((deviceType) => {
                        var temp = deviceType.lastValue;
         gladys.modules.telegram.notify({ text: 'la temperature de la maison est de ' + temp +  ' degres' },{ id: 1 })

        console.log(`la temperature de la maison est de  ${deviceType.lastValue} degres`);
	            
   });
}
	}
	
	return Promise.resolve();
};