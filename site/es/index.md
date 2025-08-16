---
layout: home

hero:
  name: Proyecto Pinguino
  tagline: Computación Física para todos
  image:
    src: /pinguino-logo.png
    alt: Logo de Proyecto Pinguino
  actions:
    - text: Descargar =>
      link: /getting-started/download.md
features:
  - title: Fácil
    details: Fácilmente programable con la sintaxis de Arduino que ya conoces.
  - title: Open Source
    details: Plataforma de Hardware abierto. Una PCB que puedes fabricar tu mismo.
  - title: Multi Plaraforma
    details: Paquetes de 32 y 64-bits, GNU/Linux y Windows.
  - title: IDE Poderoso
    details: Poderoso Entorno de Desarrollo Integrado (IDE) basado en Python.
  - title: Diverso
    details: Soporta un amplio rango de microcontroladores Microchip de 8 y 32-bits.
  - title: Multiples Periféricos
    details: USB nativo, Serial, I2C, SPI, PWM y más, todo listo para usar.
---

## Tan fácil como 1, 2, 3

```processing
// La función setup() se ejecuta una sola vez cuando enciende la placa,
// o cuando presionas RESET.
void setup() {

  // Inicializamos el pin digital LED_BUILTIN como una salida.
  pinMode(LED_BUILTIN, OUTPUT);
}

// La función loop() se ejecuta una y otra vez por siempre.
void loop() {

  digitalWrite(LED_BUILTIN, HIGH);   // enciende el LED (HIGH es el nivel de voltaje)
  delay(1000);                       // espera un segundo
  digitalWrite(LED_BUILTIN, LOW);    // apaga el LED haciendo el voltaje LOW
  delay(1000);                       // espera un segundo
}
```

## Descargar

| Sistema Operativo  |   Versión   |   Link   |
| ------------------ |:-----------:| :-------:|
| Windows            | v1.7.1.4    | [Descargar](https://github.com/PinguinoIDE/pinguino-installers/releases/download/2020.03.14-STABLE/Pinguino-installer-v1.7.1.4.exe) |
| GNU/Linux          | v1.3.3      | [Descargar](https://github.com/PinguinoIDE/pinguino-installers/releases/download/2020.03.14-STABLE/pinguino-installer-v1.3.3.sh) |
