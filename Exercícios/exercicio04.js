// Exercício 04
// Faça uma função que verifica se a primeira letra de uma string é maiúscula, retornando true ou false.
// Exemplos:
// checkIfTheFirstLetterIsUppercase("Brasil") --> true
// checkIfTheFirstLetterIsUppercase("mobiauto") --> false
// checkIfTheFirstLetterIsUppercase("xXx xXx") --> false
// checkIfTheFirstLetterIsUppercase("xDD") --> false
// checkIfTheFirstLetterIsUppercase("Deu Certo!") --> true

function checkIfTheFirstLetterIsUppercase(word) {
    return word.charAt(0) == word.charAt(0).toUpperCase();
}

module.export = checkIfTheFirstLetterIsUppercase; 