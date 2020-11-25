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

## Tão fácil quanto 1, 2, 3

### 1) Pegue a IDE

Faça Download e instale a IDE Pinguino em seu computador.

### 2) Escreva e compile

```processing
// a função setup roda uma vez quando você pressiona o botão de reset na placa
void setup() {

  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// a função loop roda continuamente várias vezes para sempre
void loop() {

  digitalWrite(LED_BUILTIN, HIGH);   // liga o LED (HIGH é o nível de tensão)
  delay(1000);                       // espera um segundo
  digitalWrite(LED_BUILTIN, LOW);    // desliga o LED mudando a tensão para LOW
  delay(1000);                       // espera um segundo
}
```

### 3) Faça Upload

Conecte a placa ao seu PC e faça upload do código. Divirta-se!

## Anúncios

::: tip 2020-11-07
Check out our new GNU/Linux installer !
:::
