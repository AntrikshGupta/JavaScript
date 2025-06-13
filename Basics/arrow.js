const user = {
    username : "Antriksh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, Welcome to website`);   //THIS ===>> current context
        // console.log(this);
                         
    }
}
// user.welcomeMessage()
// user["username"]="Guest"                                    // as we have used this the context is now changed to "Guest" 
// user.welcomeMessage()

// console.log(this);                                          //current context => EMPTY OBJECT {}


// function chai()
// {
//     console.log(this);                                         //this inside a function has soooo many values and data
// }
// chai()


// function coffee(){
//     let username = "hello"
//     console.log(this.username);                                 //this now gives the value UNDEFINED, it means this context works
//                                                                 // better with objects not functions
// }
// coffee()





// %%%%%%%%%%    ARROW FUNCTION %%%%%%%%%%%%%%

const chai = () => {
    username = "hello"
    // console.log(this.username);                                     //undefined
    // console.log(this);                                               empty object {}
    
}
// chai()


// const addNumbers = (num1, num2) => {
//     return num1 + num2
// }                                                                    BASIC ARROW FUNCTION, if we use { }parentheses then we
// console.log(addNumbers(3,4));                                        have to use return mandatorily


// const addNumbers = (num1, num2) => num1 + num2                      IMPLICIT RETURN (SINGLE LINE) No need to write return                                          
// console.log(addNumbers(3,4));

// const addNumbers = (num1, num2) => (num1 + num2)                     If we use parentheses then no use of return    
// console.log(addNumbers(3,4));


// const addNumbers = (num1, num2) => {username: "Guest"}               undefined because {} is an object and parentheses not used
// console.log(addNumbers(3,4));

// const addNumbers = (num1, num2) => ({username: "Guest"})             { username: 'Guest' }
// console.log(addNumbers(3,4));