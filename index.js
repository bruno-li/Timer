const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

// get the radius of the circle element
const perimeter = circle.getAttribute('r') * 2 * Math.PI;
// sets the attribute stroke-dasharray to the perimiter value
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const time = new Timer(durationInput, startButton, pauseButton, {
	// adding optional object callbacks to have the code from the Timer accessible outside of its class
	onStart(totalDuration) {
		// receive totalDuration from onStart() method to initialize/track the timer duration dinamically
		duration = totalDuration;
		console.log('time started');
	},
	// receive timeRemaining from  onTick() method
	onTick(timeRemaining) {
		// everytime the onTick() is call, we use currentOffSet to go clockwise by using negative values for the stroke-dashoffset attribue for the circle element
		circle.setAttribute(
			'stroke-dashoffset',
			// formula to keep track of the timer dinamically  in parallel with the animation
			perimeter * timeRemaining / duration - perimeter
		);
	},
	onComplete() {
		console.log('time completed');
	}
});
