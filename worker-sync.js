const factorial = require('./worker/factorial.js');
const compute = (array) => {
	const arr = [];
	for (let i = 0; i < 100000000; i++) {
		arr.push(i * i);
	}
	return array.map(el => factorial(el));
};

const run = async () => {
	performance.mark('start');

	const result = [
		compute([25, 12, 20, 48, 30, 50]),
		compute([25, 12, 20, 48, 30, 50]),
		compute([25, 12, 20, 48, 30, 50]),
		compute([25, 12, 20, 48, 30, 50]),
	];
	console.log(result);
	performance.mark('end');
	performance.measure('slow', 'start', 'end');
	console.log(performance.getEntriesByName('slow').pop())
}

run();