const net = require('net');
const client = new net.Socket();
const { rabbitmqController } = require('./controllers/rabbitmqController');

// RabbitMQ queue Client
const sensorsQueue = new rabbitmqController({ HOST: 'localhost', Queue: 'sensorData' });

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
	console.log(data.toString());
});

// function to send sensor values to server
const sendTtoServer = async (sensorID, value) => {
	const sensor = {
		sensorID,
		value,
	};
	client.write(JSON.stringify(sensor));
};

// Listen queue sensor data and send it to the server TCP
sensorsQueue.init(sendTtoServer);
