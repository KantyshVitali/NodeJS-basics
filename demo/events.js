const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('anything', data => {
	console.log('ON: anything', data);
});

emitter.emit('anything', {a: 1});
emitter.emit('anything', {b: 2});

setTimeout(() => {
	emitter.emit('anything', {b: 3});
}, 1500)

class Dispacther extends EventEmitter {
	subscribe(eventName, callback) {
		console.log('[Subscribe...]');
		this.on(eventName, callback);
	}

	dispath(eventName, data) {
		console.log('[Dispacthing]');
		this.emit(eventName,  data);
	}
}

const dis = new Dispacther();

dis.subscribe('aa', data => {
	console.log('ON: aa', data);
});

dis.dispath('aa', {aa: 22})