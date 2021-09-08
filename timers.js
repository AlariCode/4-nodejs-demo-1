// ------ 1
const start = performance.now();
setTimeout(() => {
	console.log('прошла секунда?');
	console.log(performance.now() - start);
}, 1000);

// ------ 2
function myFunc(arg) {
	console.log(`Аргумент => ${arg}`);
}

setTimeout(myFunc, 1500, 'Хороший');

// ------ 3
const timerId = setTimeout(() => {
	console.log('BOOM!');
}, 6000);

setTimeout(() => {
	clearTimeout(timerId);
	console.log('Очищено!');
}, 1000);

// ------ 4
const intervalId = setInterval(() => {
	console.log(performance.now());
}, 1000);

setTimeout(() => {
	clearInterval(intervalId);
}, 3000);

// ------ 5
console.log('Перед');

setImmediate(() => {
	console.log('После всего');
});

console.log('После');


// ------ 6
const timerObj = setTimeout(() => {
	console.log('Я запущусь?');
}, 2000);
timerObj.unref();
setImmediate(() => {
	timerObj.ref();
});
