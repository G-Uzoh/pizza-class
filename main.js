// Write code which models a pizza as a class. Pizza has at least following properties: name, toppings, base price for a small pizza. Pizza has also a functions, which calculates it’s price.

const extraToppingPrice = 50;
const numberOfFreeToppings = 4;

class Pizza {
    name;
    toppings = [];
    basePrice = 0; // in cents
    size = 'S';

    constructor(name, toppings, basePrice) {
        this.name = name;
        this.pizzaToppings = toppings;
        this.basePrice = basePrice; // in cents
    }
    
    getPizzaPrice() {
        let extraToppings = this.pizzaToppings.length - numberOfFreeToppings;
        if (extraToppings < 0) extraToppings = 0;

        return this.basePrice + (extraToppings * extraToppingPrice);
    }
}

class PizzaOrder {
    customerName = '';
    deliveryType; // Values: EAT_IN, TAKE_AWAY, DELIVERY
    pizzas = [];

    constructor(customerName, deliveryType) {
        this.customerName = customerName;
        this.deliveryType = deliveryType;
        this.pizzas = [];
        this.deliveryPrice = deliveryType === 'DELIVERY' ? 500 : 0; // Add extra 5 euros for home delivery
    }

    addPizza(pizza) {
        this.pizzas.push(pizza);
    }

    getTotalPrice() {
        let totalPrice = 0;

        // Loop over the pizzas and sum up their prices.
        for (const pizza of this.pizzas) {
            totalPrice += pizza.getPizzaPrice();
        }
        return totalPrice + this.deliveryPrice;
    }
}

// Creating new instances of pizza from class Pizza
let napoli = new Pizza('napoli', ['tomato', 'mozzarella', 'black olives', 'sipuli', 'ananas', 'jauheliha', 'kana'], 1000);
let americana = new Pizza('americana', ['tomato', 'mushrooms', 'green pepper', 'garlic', 'sipuli', 'ananas', 'jauheliha', 'kana'], 1000);

// Creating a new pizza order via simulation
let order = new PizzaOrder('George', 'DELIVERY');

// Adding pizzas to the order
order.addPizza(napoli);
order.addPizza(americana);