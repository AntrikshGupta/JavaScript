// Primitive data types: Number, String, Symbol, Boolean, null, undefined, BigInt 
// const score = 100

// const name = "JavaScript"

// const isPass = true

// const isOut = null

// let email;

// const contact = 9874587833n

// const title = Symbol("Avenger")

// // Reference or Non-Primitive type: Array, Objects, Functions

// const heroes = ["IronMan","Captain","Thor","Hulk","Natasha","Hawkeye"]

// const avengers_assemble=function(){
//     console.log("AVENGERSSSSSSSS .... Assemble");
    
// }

// const objectsss={
//     name: "Technology,Shield,Mjolnir,Smash,Shooters,Arrow",
//     total: 6
// }

// avengers_assemble()
// console.log(heroes);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory ->  primitive types, copy of variables is used, original remains intact

// let nameYt = "hello"
// let alias = nameYt
// console.log(alias);

// alias = "Bharat"
// console.log(nameYt);
// console.log(alias);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

console.log(userOne.email);
console.log(userTwo.email);

userTwo.email = "user@amzn.com"

console.log(userOne.email);
console.log(userTwo.email);





// Heap memory -> non-primitive types, reference of the variables is used
