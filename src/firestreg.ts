import { Canvas } from "./canvas";
import { slider } from "./utils";

export const firestreg = (c: Canvas) => {
    slider();
    c.background(0);
    c.cg.strokeStyle = `rgb(255, 255, 255)`;
    
    const tegnStreg = (
        x1: number, y1: number, 
        x2: number, y2: number, 
        x3: number, y3: number, 
        x4: number, y4: number,
        x5: number, y5: number) => {
            
        c.cg.beginPath()
        c.cg.moveTo(x1, y1);
        c.cg.lineTo(x2, y2);
        c.cg.lineTo(x3, y3);
        c.cg.lineTo(x4, y4);
        c.cg.lineTo(x5, y5);
        c.cg.stroke();
    }
    
    const maxDybde = slider();
    let sd: number;
    
    const streger = (ax: number, ay: number, bx: number, by: number, dybde: number) => {
        
        if(dybde >= maxDybde) return;
        
        //console.log(dybde);
        
        let x1 = ax;
        let y1 = ay;
        
        let x2 = 2 / 3 * ax + 1 / 3 * bx;
        let y2 = 2 / 3 * ay + 1 / 3 * by;
        
        let mx = 1 / 2 * ax + 1 / 2 * bx;
        let my = 1 / 2 * ay + 1 / 2 * by;
        
        let beta = 0.289;
        
        let x3 = mx - beta * (by - ay);
        let y3 = my + beta * (bx - ax);
        
        let x4 = 1 / 3 * ax + 2 / 3 * bx;
        let y4 = 1 / 3 * ay + 2 / 3 * by;
        
        let x5 = bx;
        let y5 = by;
        
        if(maxDybde - dybde === 1) tegnStreg(
            x1, (c.height - 100) - y1, 
            x2, (c.height - 100) - y2, 
            x3, (c.height - 100) - y3, 
            x4, (c.height - 100) - y4, 
            x5, (c.height - 100) - y5);
        
        let a1x = x1;
        let a1y = y1;
        
        let b1x = x2;
        let b1y = y2;
        
        
        let a2x = x2;
        let a2y = y2;
        
        let b2x = x3;
        let b2y = y3;
        
        
        let a3x = x3;
        let a3y = y3;
        
        let b3x = x4;
        let b3y = y4;
        
        
        let a4x = x4;
        let a4y = y4;
        
        let b4x = x5;
        let b4y = y5;
        
        streger(a1x, a1y, b1x, b1y, dybde + 1);
        streger(a2x, a2y, b2x, b2y, dybde + 1);
        streger(a3x, a3y, b3x, b3y, dybde + 1);
        streger(a4x, a4y, b4x, b4y, dybde + 1);
        
    }
    
    sd = 0;
    streger(0, 0, c.width, 0, 0);
}