

export const randInt = (max: number) => {
    return Math.round(Math.random() * (max + 1));
}

export const random = (max: number = 1) => {
    return Math.random() * max;
}

export const slider = (logValue: boolean = false): number => {
    const slider = <HTMLInputElement>document.getElementById('slider');
    const elem = <HTMLParagraphElement>document.getElementById('sliderval');
    const value = parseInt(slider.value)
    elem.innerText = (value / 10).toString();
    if(logValue) console.log(value);
    return value;
}

export const slider2 = (logValue: boolean = false): number => {
    const slider = <HTMLInputElement>document.getElementById('slider2');
    const elem = <HTMLParagraphElement>document.getElementById('sliderval2');
    const value = parseInt(slider.value)
    elem.innerText = value.toString();
    if(logValue) console.log(value);
    return value;
}

