import { loop, setup } from "./app";
import { Canvas } from "./canvas"



window.onload = () => {
    
    const c =  new Canvas('c');
    let timeBefore: number;
    let timeNow: number;
    let delta: number;
    
    const cycle = () => {
        timeNow = Date.now();
        delta = timeNow - timeBefore;
        timeBefore = timeNow;
        loop(c, delta);
        window.requestAnimationFrame(cycle)
    }
    timeBefore = Date.now();
    setup(c);
    window.requestAnimationFrame(cycle);
    
    
}



