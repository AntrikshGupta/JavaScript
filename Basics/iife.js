// Immediately invoked function expression

//()();


//Named IIFE
(function sayMyName(){
    console.log(`DB Connected`); 
})();


// Unnamed IIFE , use of arrow function
( (name) => {
    console.log(`DB connected for ${name}`);   
})("ANTRIKSH");