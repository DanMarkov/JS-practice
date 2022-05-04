/**
 * @param {array} temperatures
 */
 function getLastTemperatureMessage(temperatures) {
	return `The last temperature is at ${temperatures[temperatures.length - 1]} position`
}

// Sample usage - do not modify
console.log(getLastTemperatureMessage([-5, 12, 15])) // "The last temperature is at position 2"
console.log(getLastTemperatureMessage([13, 10])) // "The last temperature is at position 1"