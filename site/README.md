---
home: true
heroImage: /pinguino-logo.png
heroText: Pinguino Project
actionText: Download
actionLink: /getting-started/00-download
features:
- title: Easy
  details: Easily programmable with the Arduino-based syntax you already know.
- title: Open Source
  details: Open Source Hardware platform. A PCB that you can build yourself.
- title: Cross Platform
  details: 32 and 64-bit GNU/Linux and Windows packages.
- title: Powerful IDE
  details: Powerful Integrated Development Environement (IDE)
- title: Diverse
  details: Support a wide range of Microchip 8 and 32-bit microcontrollers.
- title: Multi-Peripherals
  details: Native USB, Serial, I2C, SPI, PWM and more, out-of-the-box.
footer: Copyright © Regis Blanchot
---

## As easy as 1, 2, 3

### 1) Get de IDE

Download and install the Pinguino IDE in your computer.

### 2) Write and compile

```processing
// the setup function runs once when you press reset or power the board
void setup() {

  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {

  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
}
```

### 3) Upload

Connect the board to your PC and upload the code. Enjoy!

## Announcements

::: tip 2021-04-02
* We have a new [Community page](https://github.com/PinguinoIDE/pinguinoide.github.io/discussions) !
* Added a Youtube video in the [GNU/Linux Download section](/getting-started/00-download) to install the new Pinguino IDE v13 with Spanish audio and English subtitles.
:::

::: tip 2020-11-07
Check out our new GNU/Linux installer !
:::
