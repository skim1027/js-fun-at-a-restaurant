function takeOrder(order, orders){
  if (orders.length < 3) {
    orders.push(order)
  }
  return orders
}

function refundOrder(number, orders){
  for (var i=0; i< orders.length; i++){
    if (orders[i].orderNumber === number) {
      orders.splice(i, 1)
    }
  }
  return orders
}

function listItems(orders){
  var allOrders = []
  if (orders.length < 2) {
    return orders[0].item
  } else {  
    for (var i = 0; i < orders.length; i++) {
      allOrders.push(orders[i].item)
    }
  return allOrders.join(", ")
  }
}

function searchOrder(orders, item){
  for (var i = 0; i < orders.length; i++){
    if (orders[i].item === item){
      return true
    }
  }
  return false
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}