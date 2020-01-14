class Timer {
	// DOM elements parameters.
	constructor(durationInput, startButton, pauseButton, callbacks) {
		// first valid line to check the value of this
		// console.log(this);
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		//optional callbacks check with if statement
		// this creates a reference to be accessible outside the class
		if (callbacks) {
			// callbacks is the object that was passed as an argument, which has access to onStart, onTick and onComplete
			// we are saving the reference to this.onStart in order to be accessible outside of the class
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}
		// set event listener for the startButton DOM element
		this.startButton.addEventListener('click', this.start);
		// set event listener for the pauseButton DOM element
		this.pauseButton.addEventListener('click', this.pause);
	}
	start = () => {
		//if a callback was passed, this is where we call it with the reference we created in the constructor, and let the callback object know that the timer has started. This is how we pass a value outside the class
		if (this.onStart) {
			this.onStart();
		}
		// call tick as soon as the user click the button to start
		this.tick();
		// then run tick method every 1 second
		// we need to refer the timer varialbe with keyword "this"
		// to grant pause() method access to the timer variable.
		this.interval = setInterval(this.tick, 1000);
	};
	tick = () => {
		// (this.timeRemaining - 1) expression is calculated first by calling the get timeRemaining() method and then the set timeRemaining method is called (this.timeRemaining(time)) and uses the value returned by the (this.timeRemaining) as an argument to call the set timeRemaining(time).

		//For example - if input is 30, the this.timeRemaning for the getter will return 30 - 1 = 29. Then we use the value retruend to call the setter method and pass as an argument, this.timeRemaning(29) to set the new value for the input. So first, the expression on the right side of the "=" operaator is calculated and returned, then we use that returned value as an argument for the left side of the "=" operator. This is possible because of the GET and SET keywords, which make the call automatically.
		if (this.timeRemaining <= 0) {
			this.pause();
			// check for callback
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			this.timeRemaining = this.timeRemaining - 1;
			// check for callback
			if (this.onTick) {
				this.onTick();
			}
		}
	};
	pause = () => {
		// stops setInterval from running by refering to the interval variable in the start() method
		clearInterval(this.interval);
	};

	//getter and setter helper functions to retrive and set values to the DOM element
	//setting a get function, eliminates the need to call the function in the tick () method. The get keyword automatically invokes the function
	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}
	set timeRemaining(time) {
		this.durationInput.value = time;
	}
}
