// let faveDrinks = [
// "Tea",
// "Pepsi Max",
// "Red Wine"
// ]

// console.log(faveDrinks[0])
// console.log(faveDrinks[1])
// console.log(faveDrinks[2])

// for (let i = 0; i < faveDrinks.length; i++){
// console.log(faveDrinks[i])

// }

// let multiplesTwo = [];

// for(let i = 0; i < 20; i++){
//     if (i % 2 == 0) {
//         multiplesTwo.push(i)
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo} `)

// let age = 15

// while(age < 18 ){
// console.log("You're a child!");
// age++;

// }

// console.log("You're an adult!")


// let userEntry = "1233"
// let userPin = "8"

// while (userEntry != userPin){
//     console.log("Try again")
//     userEntry = Math.floor(Math.random() * 10 + 1 )
// }

// console.log("Welcome back to Netlfix")

// let age = 59

// if (age < 18) {
//     console.log ("Ticket price is £8")
// } else if (age >= 18 && age < 60) {
//     console.log ("Ticket price is £10.95")  
//    }   else {
//    console.log("Ticket price is £7.50")   
// }

let age = 19
let price = 0

if (age < 18) {
    price = 8
} else if (age >= 18 && age < 60) {
    price = 10.95 
   }   else {
   price = 7.50  
}

console.log(`Your ticket price is ${price}`)