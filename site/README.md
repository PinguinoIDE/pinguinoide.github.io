---
home: true
heroImage: /pinguino-logo.png
heroText: Pinguino Project
actionText: Download
actionLink: /download/
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

### 1. Get de IDE

[Download and install](/getting-started/download) the Pinguino IDE in your computer. Don't known 
how to use it? Check the [Pinguino IDE v13 user manual](/pinguino-ide-v13).

### 2. Write and compile

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

Pinguino boards are programmed using the [Pinguino language](/language-reference), that in turn,
is based on Wiring and Processing Languages.

### 3. Upload

Connect the board to your PC and upload the code. Enjoy!

## :loudspeaker: Announcements

::: tip May 2022
* Fixed support for SSD1306 I2C OLED on PIC18Fx550. Thanks to [@PaoloDooM](https://github.com/PaoloDooM) for your [Pull Request #26](https://github.com/PinguinoIDE/pinguino-libraries/pull/26).
* We've submitted a talk proposal for [The Linux Foundation Open Source Summit Latin America Conference](https://events.linuxfoundation.org/open-source-summit-latin-america/) ! Cross your finger...
:::

::: tip Jun 2021
* Added a new [1-Wire](/language-reference/1wire) Language Reference page. Thanks to [@swhomans](https://github.com/swhomans) for the contribution.
:::

::: tip April 2021
* Added a new [Wiring Base](/language-reference/wiring-base) Language Reference page. Thanks to [@swhomans](https://github.com/swhomans) for the contribution.
* Updated the [8-bit Pinguino Boards](/pinguino-boards/supported-boards-8) page.
* A new [v2.0-beta.2](/download/) Pinguino installer for GNU/Linux has been released ! Thanks to [@iz3gme](https://github.com/iz3gme) for the contribution.
* New [pt-BR](/pt/) language translation for this website. Thanks to [@luzemario](https://github.com/luzemario) for their contribution.
* Added a new [/pinguino-boards/buy](/pinguino-boards/buy) page. If you want to see your Pinguino Board in this page for sell, contact us.
* We have a new [Community page](https://github.com/PinguinoIDE/pinguinoide.github.io/discussions) !
* Added a Youtube video in the [GNU/Linux Download section](/getting-started/download) to install the new Pinguino IDE v13 with Spanish audio and English subtitles.
:::

<center>[More news](/news/)</center>
