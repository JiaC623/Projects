# Ultrasonic Range Finder
Idea was originally brought up from McMaster Course ENGPHYS 3BA4, and each group found their own ways to achieve the objective.

<br>

## Process
### Materials
- Ultrasonic Transmitter
- Ultrasonic Receiver
- AND, NOR Gates
- LM358P Op-Amps
- LM311P Comparator 
- NAND R/S Latch
- TLC 555 Timer
- BCD Up/Down Counter
- Seven-segment Display Driver
- Seven-segment LED Displays


### Build-up
Since detection of the bounced-back signal would be used to indicate either the time or distance taken between transmitter and receiver. Then one key step was to determine how to recognize the part of sent signal as it got back. It would be almost impossible to deal with continuous waveform, then would there be a way to create a single pulse?

> Yes, there is! A brilliant idea was to set a duty cycle of a tiny amount of work time, say 1% on. That would be constant and periodic pulses.

> Another thing to notice was that, transmitter and receiver usually have their operation frequency. To do so, AND the operation frequency (say 40kHz of 50% duty cycle) with the pulse (1Hz of 1% duty cycle) can simply solve!

> There were some details about range of distance which would determine max length of pulse.

<br>
Now things got easy. Our group used SR Latch to switch the counting-on and counting-off modes. Transmitter and receiver as inputs respectively.

- Phase 1: Transmitter gives signal
    | I/O components | values |
    | ----------- | ----------- |
    | Transmitter input: | High (1) | 
    | Receiver input: | Low (0) | 
    | SR Latch output: | High (1) | 

    _The ON output would keep counting (time, or distance after conversion) in this phase._

- Phase 2: Signal sending
    | I/O components | values |
    | ----------- | ----------- |
    | Transmitter input: | Low (0) | 
    | Receiver input: | Low (0) | 
    | SR Latch output: | No Change (1) | 

    _As signal is still sending, the counting would continue._

- Phase 3: Receiver receives signal
    | I/O components | values |
    | ----------- | ----------- |
    | Transmitter input: | Low (0) | 
    | Receiver input: | High (1) | 
    | SR Latch output: | Low (0) | 

    _Output is now terminated. We should get a value of result (remember it is double the time/distance)._

- Phase 4: Waiting for new signal
    | I/O components | values |
    | ----------- | ----------- |
    | Transmitter input: | Low (0)| 
    | Receiver input: | Low (0)| 
    | SR Latch output: | No Change (0) |

    _Before the new pulse is sent and transmitter being output high again, the counter would remain paused. Reset setting could be triggered in this phase/or beginning of phase 1._

<br>

## Photos 
### 555 Timer to generate desired signals
555 time with resistor, capacitor, and potentiometer (easy to adjust resistance as needed) following the equation, you would need to calculate what values of them are appropriate. <br>
<img src="./images/555timer.jpg" style="width:40%;height:40%;object-fit: cover;">



### Duty cycle
The graph of a well-performing duty cycle would be like: <br>
<img src="./images/duty%20cycle.jpg" style="width:40%;height:40%;object-fit: cover;">



### Full setup for generating signal
In this picture were NOT gate, AND gate, amplifier, and comparator. Using NOT gate because 555 timer was not able to operate duty cycle below 50%, generating 99.8% duty cycle instead would be better. Comparator was used to convert analog to digital signal, as well as filter out noise, which was a great component to have in circuit! <br>
<img src="./images/generate%20signal.jpg" style="width:40%;height:40%;object-fit: cover;">



### 7-segment display and its driver 
Go to find datasheet of your display unit, be careful to wire up. <br>
<img src="./images/bridge%20to%20hex%20display.jpg" style="width:40%;height:40%;object-fit: cover;">



### Result of transmitter and receiver signal on oscilloscope
Overlapped signals when duty cycle, or chosen frequency were not appropriate to have them separate. For example, if the pulse length was too long, before the pulse was fully sent, receiver already had the signal back. <br>
<img src="./images/overlapped%20signal.jpg" style="width:40%;height:40%;object-fit: cover;">



### Amplified signal on oscilloscope
Yellow signal was amplified, and purple one was original directly from receiver. Depends on transmitter and receiver. In this case, both transducers were delicate and own small impedence, the detected signal had very small amplitude. As this happened, should always consider about amplifiers. <br>
<img src="./images/amplified%20signal.jpg" style="width:40%;height:40%;object-fit: cover;">



_It was important to test individual module and make sure they worked one by one in a big project, since it would be easier to troubleshoot a small part. And it would make the following modules to incorporate easily._

More photos can be sent in image folder.
