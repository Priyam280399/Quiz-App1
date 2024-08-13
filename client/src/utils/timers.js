export class Timer {
    constructor(duration, onTick, onComplete) {
        this.duration = duration; // Duration in seconds
        this.onTick = onTick;     // Callback function to call on each tick
        this.onComplete = onComplete; // Callback function to call when the timer ends
        this.remainingTime = duration;
        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(() => {
            if (this.remainingTime > 0) {
                this.remainingTime--;
                this.onTick(this.remainingTime);
            } else {
                this.stop();
                this.onComplete();
            }
        }, 1000); // Tick every second
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    reset() {
        this.stop();
        this.remainingTime = this.duration;
    }
}
