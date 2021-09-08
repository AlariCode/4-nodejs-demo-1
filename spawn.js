const { spawn } = require('child_process');

var workerProcess = spawn('ls');

workerProcess.stdout.on('data', function (data) {
	console.log('stdout: ' + data);
});

workerProcess.stderr.on('data', function (data) {
	console.log('stderr: ' + data);
});

workerProcess.on('close', function (code) {
	console.log('child process exited with code ' + code);
});