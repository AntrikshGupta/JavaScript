function tellMyName(){
    console.log("A");
    console.log("N");
    console.log("T");
    console.log("R");
    console.log("I");
    console.log("K");
    console.log("S");
    console.log("H");
    
}

// tellMyName()
function addNumbers(number1, number2){                  //function func_name (parameter1, parameter2, .......){
    console.log(number1 + number2);                     //      func_definition/ func_scope
}                                                       //      }

// addNumbers(4,7)                                      function execution -> func_name(argument1, argument2, .......)

// function addTwoNumbers(number1 , number2){
//     let res = number1 + number2
//     return res
// }

// const result = addTwoNumbers(7,9)
// console.log(`Result is ${result}`);



function addTwoNumbers(number1 , number2){
   return (number1 + number2)
}
const result = addTwoNumbers(6,8)
// console.log(`Result is ${result}`);


// function loginUserMessage(userName){
//     return `${userName} just logged in!!`
// }
// console.log(loginUserMessage("Antriksh"))                       //Antriksh just logged in!!
// console.log(loginUserMessage());                                //undefined just logged in!!


// function loginUserMessage(userName){
//     if (userName===undefined){
//         console.log("Please enter a username");
//         return 
//     }
//     return `${userName} just logged in!!`
// }

// function loginUserMessage(userName){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${userName} just logged in!!`
// }

// console.log(loginUserMessage());

// function loginUserMessage(userName = "Guest User"){              DEFAULT PARAMETER is given 
//     return `${userName} just logged in!!`
// }
// console.log(loginUserMessage("JHGDKG"));


function returnCartValue(...param1){
    return param1
}
// console.log(returnCartValue(100));                               [100]
// console.log(returnCartValue(100, 500, 600 ,353));                [100, 500, 600, 353]


const user = {
    userName: "Andrew",
    prices: 200
}
function handlingObjectInFunction(anyObject)
{
    console.log(`${anyObject.userName} has purchased items worth Rs. ${anyObject.prices}`);
    
}
// handlingObjectInFunction(user)


const myArray = [200, 500, 700]
function returnsArray(anyArray){
    return anyArray[2]
}

// console.log(returnsArray(myArray));
