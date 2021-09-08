const a = 5;

function b() {
	return c();
}

function c() {
	return d();
}

function d() {
	console.log(a);
}

setTimeout(() => {
	console.log('Timeout');
}, 1000)

b();