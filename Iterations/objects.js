// _______________      OBJECCTS      _________________


const myObj = {
    Game1: "Call of Duty",
    Game2: "Assassins's Creed",
    Game3: "Contra",
    Game4: "Counter Strike"
}

// for (const element of myObj) {                       ****TypeError: myObj is not iterable
//     console.log(myObj[element]);
    
// }

// For in loop used for iterating Object
for (const key in myObj) {
    console.log(`${key} is ${myObj[key]}`);
    
}