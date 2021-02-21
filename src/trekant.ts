import { Canvas } from "./canvas";

export const trekant = (c: Canvas) => {
    
    
    
    const triangle = (
        x1: number, y1: number, 
        x2: number, y2: number, 
        x3: number, y3: number) => {
            
        c.cg.beginPath();
        c.cg.moveTo(x1, y1);
        c.cg.lineTo(x2, y2);
        c.cg.lineTo(x3, y3);
        c.cg.lineTo(x1, y1);
        c.cg.fill();
    }
    
    c.background(255);
    
    c.fill(0);
    c.cg.strokeStyle = `rgb(255, 255, 255)`;
    c.cg.beginPath();
        c.cg.moveTo(c.width / 2, 0);
        c.cg.lineTo(c.width, c.height);
        c.cg.lineTo(0, c.height);
        c.cg.lineTo(c.width / 2, 0);
        c.cg.fill();
    
    c.fill(255);
    
    
    let maxR: number = 8;
    
    const makeTriangles = (
        ax: number, ay: number,
        bx: number, by: number,
        dybde: number) => {
            
        if(dybde >= maxR) return;
        
        let x1 = (ax +  bx) / 2;
        let y1 = by;
        
        let x2 = (3 * ax + bx) / 4;
        let y2 = (ay + by) / 2;
        
        let x3 = (x1 - ax) + x2;
        let y3 = y2;
        
        //c.cg.strokeStyle = `rgb(255, 0, 0)` 
        //c.cg.strokeRect(ax, ay, bx - ax, by - ay);
        //c.fill(randInt(255));
        triangle(x1, y1, x2, y2, x3, y3);
        
        
        // trekant 1
        let a1x = x2;
        let a1y = ay;
        
        let b1x = x3;
        let b1y = y2;
        
        
        // trekant 2
        let a2x = ax;
        let a2y = y2;
        
        let b2x = x1;
        let b2y = by;
        
        
        
        // trekant 3
        let a3x = x1;
        let a3y = y2;
        
        let b3x = bx;
        let b3y = by;
        
        
        
        
        
        makeTriangles(a1x, a1y, b1x, b1y, dybde + 1);
        makeTriangles(a2x, a2y, b2x, b2y, dybde + 1);
        makeTriangles(a3x, a3y, b3x, b3y, dybde + 1);
        
        //makeTriangles(b1x, b1y, a1x, a1y, dybde + 1);
        
    }
    
    makeTriangles(0, 0, c.width, c.height, 0);
}

