# PID Temperature Controller
**2023.3 - 2023.4** <br>
This work was done by me and my partner, with a lot of help from TA and Technician. We got discussions and advice from classmates too. <br>
This project was to build a PID temperature controller that restricted between 5 degrees Celsius and 45 degrees Celsius, by programming MSP430 MCU and serial communicating on MATLAB, physically connecting TEC and H Bridge in circuit to control heating or cooling until the desire temperature was reached, according to a sensed temperature on Thermistor. <br>
<br>

### Physically Demonstrate:
<img src="./images/final.png" style="width:90%;">
<br>

### Indication on MATLAB GUI
The squiggly lines around some certain level showed a beautiful consistency when it was asked to keep some certain temperature. The overshoot and undershoot looked good and indicated the PID control. <br>
<img src="./images/gui-demo.png" style="width:90%">
<br>
<br>
<br>

## Process
### Materials / Components
- MSP430 MCU
- TEC
- H Bridge
- Thermistor
- resistors and jumper wires

<br>
<br>

### Thermistor Temperature converted to Resistance
Obtained the approximate relationship by the help of voltage divider. <br>
<img src="./images/approx-TR.png" style="width:90%">

<br>

### Code on MSP430
Initializing UART and ADC all depended on the MCU. It played an important role to take in raw data of voltages on thermistor following a 16MHz clock and serial communicated to MATLAB. <br>
After getting another data from MATLAB at later time, which determined the on and off duration and therefore formed the PWM signal, MCU sent this signal to TEC and restricted the temperature. <br>

### Code on MATLAB
MATLAB did all the calculations such as conversion from voltage to temperature (current temperature), difference from expected temperature, three component values (P, I, D), adjustment. <br>
GUI provided blanks for users to input kp, ki, kp, and displayed the calculated values so that user could have better adjustment for their values. <br>
Then sent the PID value to MCU through serial communication, and drew the lines on GUI. <br>
