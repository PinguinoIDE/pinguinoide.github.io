# Construindo uma placa Pinguino

::: tip
Essa seção é sobre a construção de uma placa. Se você quiser **comprar uma placa**, por favor vá para 
[getting-started/02-boards page](/getting-started/02-pinguino-boards).
:::

O diagrama, formato físico e tamanho de uma placa pode variar e depende de como cada pessoa a desenhou,
assim podem haver muitas e ilimitadas combinações.

O que é limitado é o número de modelos de microcontrolador que o Projeto Pinguino suporta, 
assim serão esses que nós iremos documentar nesta seção.

## Selecionando um microcontrolador

O primeiro passo na construção de uma placa Pinguino é fazer ou obter um diagrama de placa Pinguino, baseado no
modelo de microcontrolador cujas características atendam aos requerimentos de um dado trabalho ou projeto.

Na barra laterar você pode encontrar a lista de microcontroladores suportados pelo Pinguino. Cada página contém
as especificações técnicas do chip, sua pinagem, um diagrama de referência básico, um link para o download do  
datasheet e o firmware necessário, e outras informações úteis.

## Fazendo a placa

Quando o chip for escolhido você pode tanto usar o diagrama para desenhar sua própria placa, 
quanto pegar um desenho pronto já feito por alguém.

## Grave o firmware

A última parte do processo é carregar o firmware no microcontrolador, cuja única função é permitir 
que o IDE do Pinguino carregue o código que nós escrevemos via USB.

Esse firmware é carregado uma única vez. Somente quando o microcontrolador é novo. Para gravar esse firmware na
primeira vez, você precisará de um hardware especializado chamado *Gravador de PIC*.

::: tip
Se você comprou uma placa Pinguino pronta, o microcontrolador dela já tem o firmware gravado.
:::
