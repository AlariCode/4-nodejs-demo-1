const EventEmitter = require('events');

var eventEmitter = new EventEmitter();

const log = () => {
	console.log('Connected');
}

eventEmitter.addListener('connection', log);
eventEmitter.emit('connection');

// -------

eventEmitter.removeListener('connection', log);
// eventEmitter.off('connection', log);
eventEmitter.emit('connection');

// -------

eventEmitter.on('msg', (data) => {
	console.log(`Получил: ${data}`);
});
eventEmitter.emit('msg', 1);

//-----

eventEmitter.once('test', () => {
	console.log('Вызовется 1 раз');
});
eventEmitter.emit('test');
eventEmitter.emit('test');

//-----

console.log(eventEmitter.getMaxListeners());
console.log(eventEmitter.listenerCount('msg'));
console.log(eventEmitter.listeners('msg'));
console.log(eventEmitter.eventNames());

//-----

eventEmitter.setMaxListeners(1);
console.log(eventEmitter.getMaxListeners());

//-----

eventEmitter.once('newListener', (event, listener) => {
	console.log(`Добавился ${event} ${listener}`);
});

eventEmitter.prependListener('msg', () => {
	console.log('prepends');
});
// eventEmitter.prependOnceListener('msg', () => {
// 	console.log('prepends');
// });
eventEmitter.emit('msg', '2е сообщение');

// --------

eventEmitter.on('error', (err) => {
	console.log(`Ошибка: ${err.message}`);
});
eventEmitter.emit('error', new Error('BOOOM!'));


// --------
const target = new EventTarget();

const logNode = () => {
	console.log('Connected NodeTarget');
}

target.addEventListener('connection_node', logNode);
target.dispatchEvent(new Event('connection_node'));