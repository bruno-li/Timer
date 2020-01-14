const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const time = new Timer(durationInput, startButton, pauseButton, {
	// adding optional object callbacks to have the code from the Timer accessible outside of its class
	onStart() {
		console.log('time started');
	},
	onTick() {
		console.log('time tick down');
	},
	onComplete() {
		console.log('time completed');
	}
});
