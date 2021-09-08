const { Worker } = require('worker_threads');

const compute = (array) => {
	return new Promise((resolve, reject) => {
		const worker = new Worker('./worker-client.js', {
			workerData: {
				array,
			}
		});

		worker.on('message', (msg) => {
			console.log(worker.threadId);
			resolve(msg)
		});

		worker.on('error', (err) => {
			reject(err)
		});

		worker.on('exit', () => {
			console.log(`Завершил работу`);
		});
	})
};

const run = async () => {
	performance.mark('start');

	const result = await Promise.all([
		compute([25, 12, 20, 48, 30, 50]),
		compute([25, 12, 20, 48, 30, 50]),
		compute([25, 12, 20, 48, 30, 50]),
		compute([25, 12, 20, 48, 30, 50]),
	]);
	console.log(result);
	performance.mark('end');
	performance.measure('slow', 'start', 'end');
	console.log(performance.getEntriesByName('slow').pop())
}

run();
