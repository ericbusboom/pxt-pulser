
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * Generate pulses on a digital pin (TypeScript implementation)
     * @param pin the digital pin to pulse
     * @param count number of pulses to generate
     * @param delay delay in microseconds for each high and low state
     */
    //% blockId="custom_pulse_ts" 
    //% block="generate %count pulses on pin %pin with %delay μs delay, implemented in TS"
    //% weight=90
    //% pin.fieldEditor="gridpicker" pin.fieldOptions.columns=4
    //% pin.fieldOptions.tooltips="false" pin.fieldOptions.width="300"
    //% delay.min=1 delay.max=65535 delay.defl=1000
    //% count.min=1 count.max=1000 count.defl=10
    //% group="Pulse Generation"
    export function generatePulsesTs(pin: DigitalPin, count: number, delay: number): void {
        for (let i = 0; i < count; i++) {
            pins.digitalWritePin(pin, 1)
            control.waitMicros(delay)
            pins.digitalWritePin(pin, 0)
            control.waitMicros(delay)
        }
    }
}
