function createRestaurant(name){
  var rest = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return rest
}

function addMenuItem(rest, item){
  if (rest.menus.hasOwnProperty(item.type)){
    if (!rest.menus[item.type].some(menuItem => menuItem.name === item.name)){ 
      rest.menus[item.type].push(item)
    }
  }
  return rest
}

function removeMenuItem(rest, itemName, kind){
  for (var i =0; i < rest.menus[kind].length; i++){
    if (rest.menus[kind][i].name === itemName) {
      rest.menus[kind].splice(i, 1)
      return `No one is eating our ${itemName} - it has been removed from the ${kind} menu!` 
    }
  }
  return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
}

function checkForFood(rest, item){
  for (var i=0; i< rest.menus[item.type].length; i++){
    if (rest.menus[item.type].includes(item)){
      return `Yes, we're serving ${item.name} today!`
    }
  }
  return `Sorry, we aren't serving ${item.name} today.`
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}