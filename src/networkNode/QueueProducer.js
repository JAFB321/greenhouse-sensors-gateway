const amqp = require('amqplib');

class QueueProducer {
	constructor({ HOST, Queue }) {
		this.HOST = HOST;
		this.Queue = Queue;
	}

	async init() {
		try {
			this.connection = await amqp.connect(this.HOST);
			this.channel = await this.connection.createChannel();

			await this.channel.assertExchange('amq.direct', 'direct');
			// await this.channel.assertQueue(this.Queue, {
			// 	durable: true,
			// });
			console.log('connected');
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	async send(msg) {
		if (this.channel) {
			const sent = await this.channel.publish('amq.direct', '', Buffer.from(msg), {
				expiration: 4000,
			});
			if (sent) console.log('sent');
		}
	}
}

module.exports = {
	QueueProducer,
};
