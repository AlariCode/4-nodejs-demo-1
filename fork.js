const { fork } = require('child_process');

const forkProcess = fork('./fork-client.js');

forkProcess.on('message', (msg) => {
	console.log(`Получено соообщение: ${msg}`);
});

forkProcess.on('close', (code) => {
	console.log(`Exited: ${code}`);
});

forkProcess.send('Ping');
forkProcess.send('disconnect');