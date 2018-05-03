let drinkMaker = require('./drinkMaker');

class Order {
    constructor(type,sugar, money) {
        this.type = type;
        this.sugar = sugar;

        this.money = money;
    }

    get command() {
        let str ="";
        switch(this.type) {
            case "chocolate":
                str="H";
                break;
            case "tea":
                str="T";
                break;
            case "coffee":
                str="C";
                break;
         return str;
        }
        return str + ':' + this.sugar + ':' + this.stick;
    }
}

function createOrder(type,sugar, money) {
    let order = new Order(type,sugar,money);
    if (order.sugar=="") {order.stick=""} else {order.stick="0"}
    drinkMaker.orders.push(order.command);
    return order;
}

function checkMoney(type, money) {
    let diff = 0;
    switch(type) {
        case "chocolate":
            diff = 0.5 - money;
            break;
        case "tea":
            diff = 0.4 - money;
            break;
        case "coffee":
            diff = 0.6 - money;
            break;
    }
    return +(diff).toFixed(1);
}

module.exports = {
    createOrder, checkMoney
}