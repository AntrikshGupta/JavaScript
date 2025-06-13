// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }
// console.log(a);                  Error as "a" is a local variable inside an if
// console.log(b);                  Error as "b" is a local variable inside an if
// console.log(c);                  NO error as var doesn't follow scope rules which is wrong



// let a = 300
// if(true){
//     let a = 10
//     const b = 20
//     console.log("Inner value is ", a);
//     }
// console.log(a);



function one(){
    const userName = "Antriksh"
    function two(){
        const website = "Youtube"
        console.log(userName);
        }
    // console.log(website);
    two()
}

// one()


if (true){
    const username = "Antriksh"
    if(username === "Antriksh"){
        const website="YT"
        // console.log(username+website);        
    }
    // console.log(website);                            ERROR
    
}
// console.log(username);                               ERROR






// +++++++++++++++++++++++++INTERESTING++++++++++++++++++++++++


// function addOne(num){                                        NORMAL FUNCTION 
//     return num + 1                                               
// }
// console.log(addOne(5));                 

// const addTwo = function(num){                                FUNCTION as an EXPRESSION (variable holding a function)
//     return num + 2
// }
// console.log(addTwo(7));



// console.log(addOne(5));                                      we called function before function declaration but no issue  
// function addOne(num){
//     return num + 1
// }
   

// console.log(addTwo(7));                                      Here a variable is holding a func that is why it cannot be 
// const addTwo = function(num){                                executed before declaration
//     return num + 2
// }
