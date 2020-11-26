# Iniciando

## O que é o Pinguino?

Há muitas plataformas excelentes para a criação de de dispositivos habilitados digitalmente que 
é difícil escolher qual usar. O Arduino é talvez uma das mais famosas, mas ela é baseada
em Microcontroladores ATMEL e as placas são difíceis de fazer ou são caras na America Latina
ou outros países.

O objetico do **Projeto Pinguino** é trazer a simplicidade da linguagem usada no Arduino para os  
Microcontroladores PIC ©Microchip, mas com hardware USB embutido e uma placa que você possa fazer 
na sua casa.

* O Pinguino é um Ambiente Integrado de Desenvolvimento (IDE) Open Source.
* O Pinguino é uma placa Open Hardware, compatível com Microcontroladores ©Microchip de 8 bits
  (somente PIC18F com módulo USB embutido) e 32-bit (PIC32MX).
* O Pinguino usa compiladores livres e de código aberto (SDCC e gcc-mips-elf,
  uma versão específica do gcc para microcontroladores PIC32) disponível para GNU/Linux,
  Windows e Mac OS X.
* Pinguino is a firmware/bootloader that control the Pinguino Board.
* Pinguino is almost 100% compatible with Arduino Language and Libraries.

## Pinguino IDE

Pinguino IDE is cross-platform, it run on Linux, Windows and Mac OS X. With this IDE, 
you can write, compile and upload code to your board.

[Download and install it](/download/) to start.
Read more about [Pinguino IDE v13](/getting-started/01-pinguino-ide) to learn.

## Pinguino boards

Pinguino boards are an open hardware electronics prototyping platform, that can be 
[purchased](/getting-started/02-pinguino-boards), or [build at yourself (DIY)](/boards).

Pinguino comes with a USB Bootloader too. This small program running inside the microcontroller
is responsible for transferring your application from your PC to the microcontroller memory
and handing over the control to this program afterwards.

## Getting help

Currently we do not have a forum or a community page, where users can post their queries.

But if something doesn't work as it should, you can always create a ticket in the issues
section of the project's Github page:

* [Pinguino IDE issues](https://github.com/PinguinoIDE/pinguino-ide/issues)
* [Pinguino Installer issues](https://github.com/PinguinoIDE/pinguino-installers/issues)
* [Pinguino website issues](https://github.com/PinguinoIDE/pinguinoide.github.io/issues)

## Join us

We will always be happy to receive help. There are many areas in this project that
you can be part of, you don't have to be a programmer or an electronics expert.

Check out the [join-us](/getting-started/join-us) page for more information.
