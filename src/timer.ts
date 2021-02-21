
export class Timer {
    private oldTime: number;
    private newTime: number;
    private time: number;
    public constructor() {
        this.oldTime = Date.now();
        this.newTime = 0;
        this.time = 0;
    }
    public start = () => {
        this.oldTime = Date.now();
    }
    public get = () => {
        this.newTime = Date.now();
        this.time = this.newTime - this.oldTime;
        return this.time;
    }
    public interval = (msDelay: number, callback: () => void) => {
        if(this.get() >= msDelay) {
            callback();
            this.start();
        }
    }
}
