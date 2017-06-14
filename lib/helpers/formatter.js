const formatter = (opts) => {
	let formattedMessage = {};

	formattedMessage['@timestamp'] = opts.timestamp();

	if (typeof opts.message === 'string' || opts.message instanceof String) {
		if (opts.message === '' && opts.meta.message) {
			formattedMessage['@message'] = opts.meta.message;
		} else {
			formattedMessage['@message'] = opts.message;
		}
	} else {
		formattedMessage['@message'] = JSON.stringify(opts.message);
	}

	formattedMessage['@fields'] = {
		'@level': opts.level.toUpperCase()
	};

	return JSON.stringify(formattedMessage);
};

export { formatter };