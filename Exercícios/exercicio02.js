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
  if (!Object.keys(newDataObject).length) return currentObject;

  return Object.assign(currentObject, newDataObject);
}

module.exports = updateData;