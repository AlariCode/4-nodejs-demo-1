process.on('message', (msg) => {
	if (msg == 'disconnect') {
		process.disconnect();
		return;
	}
	console.log(`Клиент получил: ${msg}`);
	process.send('Pong!');
})