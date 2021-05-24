require('dotenv').config();

const { QueueProducer } = require('./networkNode/QueueProducer');
const { TestController } = require('./Sensors/controllers/testController');
const { toJSON } = require('./Sensors/compatibility/tools');

// RabbitMQ queue Producer
const producer = new QueueProducer({
	HOST: process.env.RABBIT_URL || 'localhost',
	Queue: 'sensorData',
});
producer.init();

// Sensors controllers
const sensorsTest = new TestController();

sensorsTest.onSensorValue(async (raw) => {
	const sensorData = toJSON(raw);
	console.log(raw);
	if (sensorData != '{}') {
		producer.send(sensorData);
	}
});
