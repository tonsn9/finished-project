// Exercício 1
// Geralmente, quando você compra algo, é perguntado se o número do seu cartão de crédito, telefone ou
// resposta para sua pergunta secreta ainda está correto. No entanto, como alguém pode olhar por cima do
// seu ombro, você não quer que isso apareça em sua tela. Em vez disso, nós o mascaramos. Sua tarefa é
// escrever uma função maskify, que altera todos, exceto os últimos quatro caracteres, para "#".
// Exemplos:
// "4556364607935616" --> "############5616"
// "64607935616" --> "######5616"
// "1" --> "1"
// "" ---> ""
// "Skippy" --> "##ippy"
// "Nanananananananananana Batman!" --> "##########################man!"

const maskify = maskinfo => {
  if (maskinfo === '') return '';
  if (maskinfo.length < 5) return maskinfo;

  const allCharactersExceptLastFour = maskinfo.slice(0, -4);
  const firstCharacter = '#'.repeat(allCharactersExceptLastFour.length);

  return `${'#'.repeat(allCharactersExceptLastFour.length)}${maskinfo.slice(-4)}`;
};

module.exports = maskify;