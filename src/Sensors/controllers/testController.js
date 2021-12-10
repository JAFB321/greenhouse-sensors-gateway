class TestController {
	onSensorValue(listener = (rawValue) => {}) {
		setInterval(() => {
			const random = Math.floor(Math.random() * 4);
			listener('617f51b1cbf39b34613504da:' + (22 + random/0.5));

			// Temperature hako
			listener('61b2d10a1c18b0300cd603e3:' + (27.2 + random));

			//  Humidity sensor
			listener('61b2d07a1c18b0300cd16f6e:' + (0.87 + Math.random()/35));

			
		}, 3000);

		

	}
}

module.exports = {
	TestController,
};
