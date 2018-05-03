let coffeeMachine = require('./app');
let drinkMaker = require('./drinkMaker');
let assert = require('assert');

describe('Coffee Machine kata', () => {
    describe('Making drinks', () => {
        var order;
        beforeEach(function() {
            order = coffeeMachine.createOrder("chocolate",1,0.5);
        });
        it('should create an order', () => {
            assert.notEqual(order,undefined);
        });
        it('should return "C::"', () => {
            let orderCoffee = coffeeMachine.createOrder("coffee", "", "")
            assert.equal(orderCoffee.command,'C::')
        });
        it('should return "T:1:0"', () => {
            let orderTea = coffeeMachine.createOrder("tea",1)
            assert.equal(orderTea.command,'T:1:0')
        });
        it('should get the type chocolate', () => {
            assert.equal(order.type,"chocolate");
        });
        it('should get 1 sugar', () => {
            assert.equal(order.sugar,1);
        });
        it('should get 1 stick', () => {
            assert.equal(order.stick,0);
        });
        it('should return "H:1:0"', () => {
            assert.equal(order.command,'H:1:0')
        });

        it('the drink maker should get the order created', () => {
            let orderForDrinkMaker = coffeeMachine.createOrder("chocolate",2);
            let command = drinkMaker.lastOrder();
            assert(orderForDrinkMaker.command,command);

        });
        it('the checkMoney function should return true', () => {
            let rest = coffeeMachine.checkMoney(order.type, order.money);
            assert.equal(rest, 0);
        });

    });
});
