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
    <br>Transmitter input: High (1)
    <br>Receiver input: Low (0)
    <br>SR Latch output: High (1)

    _The ON output would keep counting (time, or distance after conversion) in this phase._

- Phase 2: Signal sending
    <br>Transmitter input: Low (0)
    <br>Receiver input: Low (0)
    <br>SR Latch output: No Change (1)

    _As signal is still sending, the counting would continue._

- Phase 3: Receiver receives signal
    <br>Transmitter input: Low (0)
    <br>Receiver input: High (1)
    <br>SR Latch output: Low (0)

    _Output is now terminated. We should get a value of result (remember it is double the time/distance)._

- Phase 4: Waiting for new signal
    <br>Transmitter input: Low (0)
    <br>Receiver input: Low (0)
    <br>SR Latch output: No Change (0)

    _Before the new pulse is sent and transmitter being output high again, the counter would remain paused. Reset setting could be triggered in this phase/or beginning of phase 1._

<br>

## Photos 

555 time with resistor, capacitor, and potentiometer (easy to adjust resistance as needed)
<img src="/images/555timer.jpg" style="width:300px;height:250px;object-fit: cover;">

7-segment display and its driver (datasheet needed)
<img src="/images/bridge%20to%20hex%20display.jpg" style="width:300px;height:250px;object-fit: cover;">


overlapped signal
<img src="/images/overlapped%20signal.jpg" style="width:300px;height:250px;object-fit: cover;">
