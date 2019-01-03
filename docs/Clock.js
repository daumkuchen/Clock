export default class Clock {

    constructor(autoStart) {

        this.delta = 0;

        this.startTime = 0;
        this.oldTime = 0;
        this.elapsedTime = 0;

        this.isAutoStart = (autoStart !== undefined) ? autoStart : true;
        this.isRunning = false;

    }

    reset() {

        this.delta = 0;

        this.startTime = 0;
        this.oldTime = 0;
        this.elapsedTime = 0;
        
        this.start();

    }

    start() {

        this.startTime = (typeof performance === 'undefined' ? Date : performance).now();
		this.oldTime = this.startTime;
        this.elapsedTime = 0;
        
		this.isRunning = true;

	}

	stop() {

        this.getElapsedTime();
        
		this.isRunning = false;
		this.isAutoStart = false;

	}

	getElapsedTime() {

		this.getDelta();
		return this.elapsedTime;

	}

	getDelta() {

		let diff = 0;

		if (this.isAutoStart && ! this.isRunning) {

			this.start();
			return 0;

		}

		if ( this.isRunning ) {

            let newTime = (typeof performance === 'undefined' ? Date : performance).now();

			diff = (newTime - this.oldTime) / 1000;
			this.oldTime = newTime;

			this.elapsedTime += diff;

		}

        // return diff;
        this.delta += diff;

    }
    
}