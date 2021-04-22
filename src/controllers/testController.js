class TestController {
	onSensorValue(listener = (sensorID, value) => {}) {
		setInterval(() => {
			const random = Math.floor(Math.random() * 5);
			listener('TEMP1', 30 + random);
		}, 300);

		setInterval(() => {
			const random = Math.floor(Math.random() * 10);
			listener('TEMP2', 34 + random);
		}, 200);

		setInterval(() => {
			const random = Math.floor(Math.random() * 5);
			listener('HUM1', 1 + random);
		}, 250);
	}
}

module.exports = {
	TestController,
};
