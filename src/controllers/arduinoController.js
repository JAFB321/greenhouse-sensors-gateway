const SerialPort = require('serialport');
const ReadLine = require('@serialport/parser-readline');

class ArduinoController {
	constructor({ portPath = 'COM1', baudRate = 9600 } = {}) {
		this.port = new SerialPort(portPath, { baudRate });
		this.parser = this.port.pipe(new ReadLine({ delimiter: '\n' }));

		this.port.on('open', () => {
			console.log('Serial port has been opened');
		});
	}

	onSensorValue(listener = (sensorID, value) => {}) {
		this.parser.on('data', (data) => {
			const [sensorID, sensorValue] = data.split(',');

			if (sensorID && sensorValue) {
				listener(sensorID, sensorValue);
			}
		});
	}
}

module.exports = {
	ArduinoController,
};
