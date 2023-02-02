// Exercício 04
// Faça uma função que verifica se a primeira letra de uma string é maiúscula, retornando true ou false.
// Exemplos:
// checkIfTheFirstLetterIsUppercase("Brasil") --> true
// checkIfTheFirstLetterIsUppercase("mobiauto") --> false
// checkIfTheFirstLetterIsUppercase("xXx xXx") --> false
// checkIfTheFirstLetterIsUppercase("xDD") --> false
// checkIfTheFirstLetterIsUppercase("Deu Certo!") --> true

function isFirstLetterUppercase(word) {
    if (typeof word !== 'string' || word.length === 0) {
      throw new Error('Invalid input: expected a non-empty string.');
    }
    return word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90;
  }
  
  module.exports = isFirstLetterUppercase;