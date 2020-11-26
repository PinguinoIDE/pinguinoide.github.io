# Construindo uma placa Pinguino

::: tip
Essa seção é sobre a contrução de uma placa. Se você quiser **comprar uma placa**, por favor vá para 
[getting-started/02-boards page](/getting-started/02-pinguino-boards).
:::

O diagrama, formato físico e tamanho de uma placa pode variar e depende de como cada pessoa a desenhou,
assim podem haver muitas e ilimitadas combinações.

O que é limitado é o número de modelos de microcontrolador que o Projeto Pinguino suporta, 
assim serão esses que nós iremos documentar nesta seção.

## Selecionando um microcontrolador

O primeiro passo na construção de uma placa Pinguino é fazer ou obter um diagrama de placa Pinguino, baseado no
modelo de microcontrolador cujas características atendam aos requerimentos de um dado trabalho ou projeto.

In the sidebar you can find the list of microcontrollers supported by Pinguino. Each page contains 
the technical specifications of the chip, its pinout, a basic reference diagram, a link to download its 
datasheet and required firmware, and other useful information.

## Building the board

Once the chip is selected you can either use the diagram to design your own board, 
or get a board design already made by someone else.

## Burn the firmware

The last part of the process is to load the firmware into the microcontroller, whose only function 
is to allow Pinguino IDE to upload the code we write via USB.

This firmware is uploaded only once. Only when the microcontroller is new. To write this firmware the
first time, you need specialized hardware called *PIC programmer*.

::: tip
If you bought a board built and ready to go, then it already has the firmware written to its 
microcontroller.
:::
