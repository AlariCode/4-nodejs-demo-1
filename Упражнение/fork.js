const { compute } = require('./factorial');

process.on('message', (msg) => {
	process.send(compute(msg));
	process.disconnect();
});
