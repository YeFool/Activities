// const person = {
// name: "Ben",
// age: 25,
// sayHi(){
//    return (`Hello my name is ${this.name}`)}
// }

// console.log(person.sayHi())

// const pet = {
//     name: "Oscar",
//     typeOfPet: "Dog",
//     age: 12,
//     colour: "Grey",
//     eat(){
//        return (`${this.name} is eating`) 
//     },
//     drink(){
//         return (`${this.name} is drinking`)
//     }
// }

// console.log(pet.eat())

const coffeeShop = {
    branch: "Starbucks",
    drink: [
        "Cappuccino", 2.30, "Latte", 1.80, "Tea", 1 ],
    food: ["Bacon roll", 3.30, "Donut", 1.50, "egg", 1.20 ],
    drinkOrdered(drink) {
        if (this.drink.includes(drink)) {
            const priceArray = this.drink.indexOf(drink) + 1;
            const price = this.drink[priceArray];
            return `Your order is ${drink}. Price: £${price}`;
        } else {
            return "Invalid drink selection.";
        }
    },
    foodOrdered(food) {
        if (this.food.includes(food)) {
            const priceArray = this.food.indexOf(food) + 1;
            const price = this.food[priceArray];
            return `Your order is ${food}. Price: £${price}`;
        } else {
            return "Invalid drink selection.";
        }
    }
};

console.log(coffeeShop.drinkOrdered("Tea",));
console.log(coffeeShop.foodOrdered("Donut",));