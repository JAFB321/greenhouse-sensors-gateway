class TestController {
	onSensorValue(listener = (rawValue) => {}) {
		setInterval(() => {
			const random = Math.floor(Math.random() * 5);
			listener('HWarm-X2:' + (35 + random));
		}, 3000);

		setInterval(() => {
			const random = Math.floor(Math.random() * 10);
			listener('HSB-A2:' + (34 + random));
		}, 3000);

		setInterval(() => {
			const random = Math.floor(Math.random() * 5);
			listener('HSB-A3:' + (20 + random));
		}, 2500);

		setInterval(() => {
			const random = Math.floor(Math.random() * 5);
			listener('HSB-A4:' + (25 + random));
		}, 3500);

		setInterval(() => {
			const random = Math.floor(Math.random() * 20);
			listener('HMD-Z-1:' + (290 + random));
		}, 3500);

		setInterval(() => {
			const random = Math.floor(Math.random() * 5);
			listener('RTR-01:' + (18 + random));
		}, 2500);

		setInterval(() => {
			const random = Math.floor(Math.random() * 5);
			listener('HMD-Z-2:' + (12 + random));
		}, 3100);
	}
}

module.exports = {
	TestController,
};
