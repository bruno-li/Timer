const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

// get the radius of the circle element
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
// sets the attribute stroke-dasharray to the perimiter value
circle.setAttribute('stroke-dasharray', perimeter);

let currentOffSet = 0;

const time = new Timer(durationInput, startButton, pauseButton, {
	// adding optional object callbacks to have the code from the Timer accessible outside of its class
	onStart() {
		console.log('time started');
	},
	onTick() {
		// everytime the onTick() is call, we use currentOffSet to go clockwise by using negative values for the stroke-dashoffset attribue for the circle element
		circle.setAttribute('stroke-dashoffset', currentOffSet);
		currentOffSet = currentOffSet - 1;
	},
	onComplete() {
		console.log('time completed');
	}
});
