// const person = {
// name: "Ben",
// age: 25,
// }

// console.log(person)

// person.favSongs =  [
//     "In Time - Robbie Robb",
//     "Bound 2 - Kanye West",
//     "Morning Train - Sheana Easton"
// ]

// console.log(person)

// let offer = "none";

// let time = 1400;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot Chocolate"
//     ],

//     breakfastOffer:"Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "No offers on at the moment"
//  }

//  if (time < 1100) {
//     offer = cafe.breakfastOffer
//     console.log(cafe.breakfastOffer)
//  } else if (time < 1500) {
//     offer = cafe.lunchOffer
//     console.log(cafe.lunchOffer)
// } else {
//     offer = cafe.noOffer
//     console.log(cafe.noOffer)
// }

// let day = "Tuesday"
// let alarm = ""

// const alarmMessage = {
//     weekendAlarm: "No Alarm Needed",
//     weekdayAlarm: "Get up at 7am"
// }

// if (day == "Saturday" || day == "Sunday") {
//     alarm = alarmMessage.weekendAlarm
// } else {
//     alarm = alarmMessage.weekdayAlarm
// }

// console.log(alarm)

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Cappuccino",
        "Latte",
        "Filter coffee",
        "Tea",
        "Hot Chocolate"
    ],

    breakfastOffer:"Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "No offers on at the moment",
    // es6 doesn't need colon and =>
    openCafe() {                            
        if (this.hasSpecialOffers) {
            return "Time for a special offer"
        }
    },
    closeCafe(){
        return "We are closed"
    }
 };

 console.log(cafe.openCafe())