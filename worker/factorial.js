module.exports = function factorial(n) {
	if (n === 1 || n === 0) {
		return 1;
	}
	return factorial(n - 1) * n;
}