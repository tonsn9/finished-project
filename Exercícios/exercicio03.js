// Exercicio 03
// Faça uma chamada para a api "rick and morty" e resgate informações dos seguintes personagens: Rick
// Sanchez, Morty Smith, Summer Smith, Beth Smith, Jerry Smith. Ajuste os dados para que fiquem igual à
// saída de exemplo abaixo.
// Documentação
// https://rickandmortyapi.com/documentation/#rest

const API_URL = "https://rickandmortyapi.com/api/character/";

async function getRickAndMortyCharacters(page = 1) {
  try {
    const response = await fetch(`${API_URL}${page}`);
    if (!response.ok) {
      throw new Error(`Unable to fetch characters: ${response.statusText}`);
    }
    const characters = await response.json();
    return characters.map((item) => {
      return {
        name: item.name,
        gender: item.gender,
        image: item.image,
        species: item.species,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export default getRickAndMortyCharacters;
