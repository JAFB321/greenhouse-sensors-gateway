const net = require('net');
const client = new net.Socket();

// TCP/IP Client to communicate with the Server
const PORT = 4000;
const HOST = 'localhost';

client.connect(PORT, HOST, () => {
	console.log(`Connected to the server ${HOST}:${PORT}`);
});

client.on('data', (data) => {
	console.log('Data recieved from the Server');
	console.log(data);
});

client.on('error', (error) => {
	console.log('An error is ocurred');
	console.log(error);
});

client.on('close', () => {
	console.log('Connection Close');
});

// Send a message
const msg = {
	type: 'msg',
	content: 'Hola mundo',
};

client.write(JSON.stringify(msg));
