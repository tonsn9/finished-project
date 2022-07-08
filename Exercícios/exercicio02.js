// Exercício 2
// Faça uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, um objeto
// com dados que vão atualizar o objeto do primeiro parâmetro.
// Obs: se no objeto do segundo parâmetro tiver dados que o objeto do primeiro não tem, o valor não deve
// persistir no objeto de retorno da função. Somente são atualizados os dados que o objeto do primeiro
// parâmetro possuir.
// Ex: updateData({ name: "Marcos", country: "Brasil", age: 22 }, { country: "Japão", age: 33 }) --> saida: { name:
// 'Marcos', country: 'Japão', age: 33 }
// Ex: updateData({ name: "Marcos", country: "Brasil", age: 22 }, { price: 89.9, amount: 15, description:
// "camiseta 100% algodão" }) --> saida: { name: "Marcos", country: "Brasil", age: 22 }
// Ex: updateData({ name: "Rafael", country: "Chile", age: 42 }, { name: "Camiseta Polo", price: 59.9, amount: 30
// }) --> saida: { name: "Rafael", country: "Chile", age: 42 }

const receiveObjectFirst = {
  name: "Marcos",
  country: "Brasil",
  age: "22",
};

const receiveObjectSecond = {
  price: "89.90",
  amount: "15",
  description: "camiseta 100% algodão",
};

function updateData(currentObject, newDataObject) {
  const propriedades = Object.keys(newDataObject);
  propriedades.map((propriedade) => {
    if (currentObject[propriedade] === undefined) {
      return;
    }
    currentObject[propriedade] = newDataObject[propriedade];
    return;
  });
  return currentObject;
}

module.export = updateData;
