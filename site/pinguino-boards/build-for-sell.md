# Build a board for Sell

::: tip
This section is for build a board. If what you want is **to buy a board**, please go to the 
[/pinguino-boards/buy](/pinguino-boards/buy) page.
:::

The diagram, physical shape and form factor of a board can vary and depends on how each person has 
designed it, so there can be many and unlimited combinations.

What is limited is the number of microcontroller models that the Pinguino Project supports, 
so these are the ones that we are going to document in this section.

## Selecting a microcontroller

The first step in building a Pinguino board is to make or obtain a Pinguino board diagram, based on the
microcontroller model whose technical characteristics meet the requirements of a given job or project.

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
