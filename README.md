# JS G3n1u5

### servidor => https://js-g3n1u5.herokuapp.com/

O JS G3n1u5 é um jogo de memorização. Nesse jogo uma sequência de números é exibida para o jogador,
que precisa memorizar e repetir essa sequência corretamente usando o teclado na tela do jogo. Toda vez
que o jogador acertar a sequência inteira ele soma um ponto e uma nova rodada se inicia. A cada nova
rodada a sequência anterior é acrescida de um novo número de modo que a sequência vai ficando cada vez
maior e mais difícil de memorizar. Se o jogador errar algum número da sequência o jogo acaba e a
pontuação final é mostrada. O jogador poderá salvar sua pontuação no ranking do jogo.

## Regras
- A sequência começa com apenas um número;
- A cada rodada a sequência anterior é repetida e um número aleatório é adicionado ao final da
sequência;
- O mostrador exibe um número por vez e cada número fica visível por 300 milissegundos;
- O jogador precisa memorizar toda a sequência e repetir-la corretamente usando o teclado na tela do
jogo;
- Se o jogador repetir a sequência corretamente ele soma um ponto e uma nova rodada se inicia;
- Se o jogador errar qualquer número da sequência o jogo acaba;

## Funcionalidades
- O jogador poderá ver a tela de ranking clicando no ícone do canto superior direito da tela inicial do
jogo;
- O jogo começa quando o jogador clicar no botão “Iniciar Jogo”;
- Ao final do jogo, o jogador poderá salvar sua pontuação no ranking digitando seu nome e clicando no
botão “Salvar Ranking”;
- Caso não deseje salvar sua pontuação, o jogador poderá voltar para a tela inicial do jogo clicando no
botão do canto superior direito da tela final do jogo;
- Depois de salvar sua pontuação, a tela de ranking deve ser exibida para o jogador com a lista de
ranking atualizada;
- Ao clicar no botão do canto superior esquerdo da tela de ranking o jogador voltará para a tela inicial
do jogo;


A interface foi criada com HTML e CSS, com a responsividade para tamanhos de tela diferentes.
A programação do jogo foi feita com JavaScript, atendendo as funcionalidades apresentadas.
Foi utilizada a biblioteca React.

## Ranking
Para obter a lista do ranking uma requisição é enviada para:
- endereço: https://us-central1-prova-front-letras.cloudfunctions.net/ranking
- método: GET
Para salvar um score no ranking uma requisição é enviada para:
- endereço: https://us-central1-prova-front-letras.cloudfunctions.net/save
- método: POST
- corpo: {name: <Nome | String>, score: <Score | Number>}

Para instalar o módulos: npm install ou yarn install
Para executar a aplicação: npm start
