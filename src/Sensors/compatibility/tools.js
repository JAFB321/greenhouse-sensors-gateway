const toJSON = (raw) => {
	if (raw?.length) {
		const [sensorID, value] = raw.split(':');
		const obj = {
			sensorID,
			value,
		};

		return JSON.stringify(obj);
	} else {
		return '{}';
	}
};

module.exports = {
	toJSON,
};
