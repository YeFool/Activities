// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
// } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

// let orderCount = 0;

// const takeOrder = (topping, sauce) => {
//     console.log(`Pizza with ${topping} and ${sauce}`);
//     orderCount++;
// }

// takeOrder("pineapple", "bbq")
// console.log(orderCount++)

let pinNum = 7825;
let balance = 100;

const cashWithdrawal = (pin, amount) => {
  if (pin === pinNum) {
    if (amount <= balance) {
      console.log(`Withdrawing ${amount} from your account.`);
      balance -= amount;
    } else {
      console.log(`Insufficient balance`);
    }
    } else {
      console.log(`Incorrect pin number`);
    }
};

cashWithdrawal(7815, 100);


