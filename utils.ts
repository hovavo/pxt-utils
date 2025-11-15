


namespace led {


    //% block="plot only x $x y $y"
    //% weight=1000
    export function plotOnly(x: number, y: number) {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (i === x && j === y)
                    led.plot(i, j);
                else led.unplot(i, j);
            }
        }
    }
}
