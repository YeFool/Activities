const person = {
  name: "Ben",
  age: 25,
  sayHi() {
    return `Hello my name is ${this.name}`;
  },
};

console.log(person.sayHi());

const pet = {
  name: "Oscar",
  typeOfPet: "Dog",
  age: 12,
  colour: "Grey",
  eat() {
    return `${this.name} is eating`;
  },
  drink() {
    return `${this.name} is drinking`;
  },
};

console.log(pet.eat());

const coffeeShop = {
  branch: "Starbucks",
  drink: ["Cappuccino", 2.3, "Latte", 1.8, "Tea", 1],
  food: ["Bacon roll", 3.3, "Donut", 1.5, "egg", 1.2],
  drinkOrdered(drink) {
    if (this.drink.includes(drink)) {
      const itemPrice = this.drink.indexOf(drink) + 1;
      const price = this.drink[itemPrice];
      return `Your order is ${drink}. Price: £${price}`;
    } else {
      return "Invalid drink selection.";
    }
  },
  foodOrdered(food) {
    if (this.food.includes(food)) {
      const itemPrice = this.food.indexOf(food) + 1;
      const price = this.food[itemPrice];
      return `Your order is ${food}. The price is: £${price}`;
    } else {
      return "Invalid Food selection.";
    }
  },
};

console.log(coffeeShop.drinkOrdered("Latte"));
console.log(coffeeShop.foodOrdered("Donut"));
