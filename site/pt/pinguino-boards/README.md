# Manual do Usuário das Placas

As placas Pinguino são o núcleo do projeto e de sua comunidade.

Essa parte eletrônica é composta de pelo menos os seguintes blocos:

- Uma porta/conector USB.
- Um microcontrolador.
- Um botão de reset.
- Um número de pinos ou conectores para entrada/saída.

O conector/porta USB é usado para conectar a placa ao computador, usá-lo como fonte de alimentação e
programar o microcontrolador da placa.

O microcontrolador é o cérebro da placa e onde o programa principal e instruções residem.
Ele é programado através da IDE do Pinguino. O programa é escrito, compilado e carregado para a placa via USB.

Uma vez escrito e compilado, você precisa pressionar o botão de reset na placa, para colocá-la em modo
de programação, assim a IDE do Pinguino pode carregar o código para o microcontrolador.

A placa pode obter informação do ambiente usando sensores e controlá-lo através de atuadores. 
Tanto os sensores quanto os atuadores são conectados a placa usando os pinos de entrada/saída que ela tem.
