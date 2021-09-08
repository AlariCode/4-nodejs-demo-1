const { parentPort, workerData } = require('worker_threads');
const { compute } = require('./factorial');

parentPort.postMessage(compute(workerData))
