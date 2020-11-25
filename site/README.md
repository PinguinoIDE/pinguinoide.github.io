---
home: true
heroImage: /pinguino-logo.png
heroText: Pinguino Project
actionText: Download
actionLink: /getting-started/00-download
features:
- title: Fácil
  details: Facilmente programável com a sintaxe baseada em Arduino que você já conhece.
- title: Open Source
  details: Plataforma de Hardware Open Source. Uma placa que você pode fazer por conta própria.
- title: Cross Platform
  details: Pacotes GNU/Linux e Windows 32 e 64 bits.
- title: IDE Potente
  details: Ambiente de Desenvolvimento Integrado (IDE) potente
- title: Diverso
  details: Suporta grande leque de microcontroladores Microchip de 8 e 32-bits.
- title: Multi-Periféricos
  details: USB Nativo, Serial, I2C, SPI, PWM e mais, pronto para usar.
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
