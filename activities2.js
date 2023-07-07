// let age = 16;
// let country = "UK";

// if (age > 17 && country == "UK") {
//   console.log("Yes, I can serve you");
// } else {
//   console.log("You are too young");
// }

// let topping = "Anchovies";

// switch (topping) {
//   case "Sweetcorn":
//     console.log(`${topping} should not be on a pizza.`);
//     break;
//   case "Pineapple":
//     console.log(`I don't mind having ${topping} on my pizza`);
//     break;
//   case "Anchovies":
//     console.log("These are important ingredients for my pizza.");
//     break;
//   case "Jalapeno":
//     console.log(`${topping} should not be on a pizza.`);
//     break;
//   default:
//     console.log(`${topping} should not be on a pizza.`);
// }

// let password = "codedude";

// if (password.length < 8) {
//   console.log("Password is too short.");
// } else {
//   console.log(password);
// }

// let num = 22;

// if (num % 5 === 0 || num % 3 === 0) {
//   console.log("This number is divisible by 3 or 5");
// } else {
//   console.log("This number is not divisible by 3 or 5");
// }

// let num = 30;

// if (num % 5 === 0 && num % 3 === 0) {
//   console.log("fizz buzz");
// } else if (num % 3 === 0) {
//   console.log("fizz");
// } else if (num % 5 === 0) {
//   console.log("buzz");
// } else {
//   console.log(num);
// }

// let num = 1001;
// let numString = num.toString();
// let reversedString = numString.split("").reverse().join("");

// if (numString === reversedString) {
//   console.log(`${num} is a palindrome.`);
// } else {
//   console.log(`${num} is not a palindrome.`);
// }

// let time = 19;
// let placeOfWork = "Careermakers";
// let townOfHome = "Manchester";

// if (time > 18 || time < 8) {
//   console.log(`I am at home in ${townOfHome}`);
// } else if (time >= 8 && time < 9) {
//   console.log(`I am commuting to ${placeOfWork}`);
// } else if (time >= 9 && time < 17) {
//   console.log(`I am at ${placeOfWork}`);
// } else if (time >= 17 && time <= 18) {
//   console.log(`I am commuting back to ${townOfHome}`);
// } else {
//   console.log(`I'm elsewhere`);
// }

// let string =
//   "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";

// let vowels = /[aeiou]/gi;
// let matches = string.match(vowels);

// if (matches && matches.length > 0) {
//   let vowelIndex = string.lastIndexOf(matches[matches.length - 1]);
//   console.log(`The last vowel index is, ${vowelIndex}`);
// } else {
//   console.log(`No vowels.`);
// }

// console.log("Last vowel index:", lastVowelIndex);

// let palin = "racecar";

// if (palin == palin.split("").reverse().join("")) {
//   console.log(` ${palin} is a palindrome`);
// } else {
//   console.log(` ${palin} is not a palindrome.`);
// }

let num1 = 4;
let num2 = 3;

if ((num1 + num2) % 2 === 0) {
  console.log(num1 + num2);
} else {
  console.log(num1 * num2);
}
