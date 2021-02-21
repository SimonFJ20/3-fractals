import { Canvas } from "./canvas";
import { slider, slider2 } from "./utils";

export const mandelbrot = (c: Canvas) => {
    
    const calcFill = (i: number, max: number) => {
        
        //let hue = (max / 360) * i;
        if(i === max) c.fill(0);
        else c.cg.fillStyle = `hsl(` + (i * (360 / max)) + `, 100%, 50%)`
        
    }
    
    const tsx = (x: number) => x * (c.width / (6 / (slider() / 10))) + c.width / 2;
    const tsy = (y: number) => y * (c.height / (6 / (slider() / 10))) + c.height / 2;
    
    const fsx = (x: number) => (x - (c.width) / 2) / (c.width / (6 / (slider() / 10)));
    const fsy = (y: number) => (y - (c.height) / 2) / (c.height / (6 / (slider() / 10)));
    
    
    const calcPixel = (Px: number, Py: number) => {
        let x0 = fsx(Px);
        let y0 = fsy(Py);
        let x = 0;
        let y = 0;
        let iteration = 0;
        let maxIteration = slider2();
        let xtemp = 0;
        while(x*x + y*y <= 2*2 && iteration < maxIteration) {
            xtemp = x*x - y*y + x0;
            y = 2 * x * y + y0;
            x = xtemp;
            iteration += 1;
        }
        
        calcFill(iteration, maxIteration)
        c.pixel(Px, Py);
    }
    
    c.background(255);
    c.fill(255);
    
    for(let y = 0; y < c.width; y++) {
        for(let x = 0; x < c.width; x++) {
            calcPixel(x, y);
        }
    }
    
}
