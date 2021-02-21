

export class Canvas {
    
    canvas: HTMLCanvasElement;
    cg: CanvasRenderingContext2D;
    
    width: number;
    height: number;
    
    pixelScale: number;
    
    constructor(canvasId: string) {
        this.canvas = <HTMLCanvasElement> document.getElementById(canvasId);
        this.cg = <CanvasRenderingContext2D> this.canvas.getContext('2d');
        this.width = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
        this.height = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.pixelScale = 1;
    }
    
    
    fill = (r: number, g?: number, b?: number) => {
        if(!g) g = r;
        if(!b) b = r;
        this.cg.fillStyle = `rgb(${r},${g},${b})`;
    }
    
    
    background = (r: number, g?: number, b?: number) => {
        const bfill = this.cg.fillStyle;
        this.fill(r, g, b);
        this.cg.fillRect(0, 0, this.width, this.height);
        this.cg.fillStyle = bfill;
    }
    
    rect = (x: number, y: number, width: number, height: number) => {
        this.cg.fillRect(x, y, width, height);
    }
    
    pixel = (x: number, y: number, scale: number = this.pixelScale) => {
        this.cg.fillRect(x, y, scale, scale);
    }
    
}

