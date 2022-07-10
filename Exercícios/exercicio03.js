// Exercicio 03 
// Faça uma chamada para a api "rick and morty" e resgate informações dos seguintes personagens: Rick
// Sanchez, Morty Smith, Summer Smith, Beth Smith, Jerry Smith. Ajuste os dados para que fiquem igual à
// saída de exemplo abaixo.
// Documentação
// https://rickandmortyapi.com/documentation/#rest

async function getRickAndMortyCharacters() {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/1,2,3,4,5"
  );
  const personagens = await response.json();
  return personagens.map((item) => {
    return {
      nome: item.name,
      genero: item.gender,
      avatar: item.image,
      especie: item.species,
    };
  });
}
module.export = getRickAndMortyCharacters;
