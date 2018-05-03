let orders = [];


function lastOrder() {
    return orders[orders.length-1];
}

module.exports = { lastOrder, orders}