function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(stuff, price, type){
  var item = {
    name: stuff,
    price: price,
    type: type
  }
  return item
}

function addIngredients(ing, ingredients){
    if (!ingredients.includes(ing)){
      ingredients.push(ing)
    } 
  return ingredients
}

function formatPrice(price){
  return `$${price}`
}

function decreasePrice(price){
  var newPrice = price * .9
  return newPrice
}

function createRecipe(title, ing, item){
  var recipe = {
    title: title,
    ingredients: ing,
    type: item
  }
  return recipe
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


