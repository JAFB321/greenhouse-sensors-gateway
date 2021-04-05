class TestController {
	onSensorValue(listener = (sensorID, value) => {}) {
		setInterval(() => {
			const random = Math.floor(Math.random() * 5);
			listener(30 + random, 'TEMP1');
		}, 300);

		setInterval(() => {
			const random = Math.floor(Math.random() * 10);
			listener(34 + random, 'TEMP2');
		}, 200);

		setInterval(() => {
			const random = Math.floor(Math.random() * 5);
			listener(1 + random, 'HUM1');
		}, 250);
	}
}

module.exports = {
	TestController,
};
