const amqp = require('amqplib');

class rabbitmqController {
	constructor({ HOST, Queue }) {
		this.HOST = HOST;
		this.Queue = Queue;

		this.init2();
	}

	async init2() {
		const connection = await amqp.connect(
			'amqp://localhost' 
		);
		const channel = await connection.createChannel();

		// channel.bindQueue('')
		await channel.assertQueue(this.Queue, {
			durable: true,
		});

		channel.consume(this.Queue, async (msg) => {
			console.log(msg.content.toString());
			// try {
			// 	const sensor = JSON.parse(msg.content.toString());
			// 	console.log(sensor, '\n');

			// 	const { sensorID, value } = sensor;
			// 	await onSensorValue(sensorID, value);

			// 	channel.ack(msg);
			// } catch (error) {
			// 	console.log('error on send:');
			// 	console.log(error);
			// }
		});
	}

	async init(onSensorValue) {
		this.onSensorValue = onSensorValue;

		const connection = await amqp.connect('amqp://localhost');
		const channel = await connection.createChannel();

		// channel.bindQueue('')
		await channel.assertQueue(this.Queue, {
			durable: true,
		});

		channel.consume(this.Queue, async (msg) => {
			try {
				const sensor = JSON.parse(msg.content.toString());
				console.log(sensor, '\n');

				const { sensorID, value } = sensor;
				await onSensorValue(sensorID, value);

				channel.ack(msg);
			} catch (error) {
				console.log('error on send:');
				console.log(error);
			}
		});

		// setTimeout(function () {
		// 	channel.close();
		// 	conn.close();
		// }, 500);
	}
}

module.exports = {
	rabbitmqController,
};
