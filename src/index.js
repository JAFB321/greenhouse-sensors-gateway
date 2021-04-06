const net = require('net');
const client = new net.Socket();
const { ArduinoController } = require('./arduinoController');
const { TestController } = require('./testController');

const arduino = new ArduinoController({ portPath: 'COM1', baudRate: 9600 });
const test = new TestController();

// TCP/IP Client to communicate with the Server
const PORT = 4000;
const HOST = 'localhost';

client.connect(PORT, HOST, () => {
	console.log(`Connected to the server ${HOST}:${PORT}`);
});

client.on('error', (error) => {
	console.log('An error is ocurred');
	console.log(error);
});

client.on('close', () => {
	console.log('Connection Close');
});

client.on('data', (data) => {
	console.log('Data recieved from the Server');
	console.log(data);
});

// Send sensor values to server
const sendTtoServer = (sensorID, value) => {
	const sensor = {
		sensorID,
		value,
	};
	client.write(JSON.stringify(sensor));
};

// Listen sensors controllers
arduino.onSensorValue(sendTtoServer);
test.onSensorValue(sendTtoServer);
