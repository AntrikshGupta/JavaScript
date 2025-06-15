//         FOR OF LOOP

//for of loop indexing starts from 1 rather than 0, and will traverse the full length of the object passed

const arr = [1,2,3,4,5]
for (const index of arr) {
    // console.log(`Index is ${index-1} value is ${arr[index-1]}`);
    
}




//        MAP: stores unique key value pairs and remembers the order of insertion
const myMap = new Map()
myMap.set('In', "India")
myMap.set('Us', "United Sates")
myMap.set('Fr', "France")

// console.log(myMap);
for (const [key,value] of myMap) {
    // console.log(key,": ",value);
    
}





// +++++++++++++++++++++++++++++++    FOR IN LOOP    +++++++++++++++++++++++++++

const lang = ["C","Java","Python","JavaScript"]
for (const key in lang) {
    // console.log(lang[key]);
}






/* ***********************************   FOR EACH   *************************************  */

const prog = ["C","Java","Python","JavaScript","C++"]

// prog.forEach(function (item_in_array_prog) {                    CALLBACK FUNCTION DOESNT HAVE A NAME
//     console.log(item_in_array_prog);
    
// })


// prog.forEach((val)=>{                                            USE OF ARROW FUNCTION
//     console.log(`:) ${val}`);
    
// })


// const greet = function(param){
//     console.log(param," :)");
    
// }
// prog.forEach(greet)




// prog.forEach((item,j, i)=>{
//     console.log(item,j, i);   
// })
//              OUTPUT OF ABOVE CODE
/*

C 0 [ 'C', 'Java', 'Python', 'JavaScript', 'C++' ]
Java 1 [ 'C', 'Java', 'Python', 'JavaScript', 'C++' ]
Python 2 [ 'C', 'Java', 'Python', 'JavaScript', 'C++' ]
JavaScript 3 [ 'C', 'Java', 'Python', 'JavaScript', 'C++' ]
C++ 4 [ 'C', 'Java', 'Python', 'JavaScript', 'C++' ]

*/

const myProgLang = [
    {
        lang: "Javascript",
        extension: "js"
    },
    {
        lang: "Java",
        extension: "java"
    },
    {
        lang: "Python",
        extension: "py"
    },
]

myProgLang.forEach((item, index, arr)=>{
    // console.log(`Entry number ${index+1} is "${arr[index].lang}" saved with extension of ".${arr[index].extension}"`);
    // console.log(item.lang, " ", item.extension);
    
    
})



// +++++++++++++++++++++++++++++++++++++    FILTER   +++++++++++++++++++++++++++++++++
//conditional response

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.filter((num) => num > 4)
// console.log(newNum);

// const newNum=[]

// myNum.forEach((num) => {
//     if(num>4){
//         newNum.push(num)
//     }
// });
// console.log(newNum);




//++++++++++++++++++++++++++++++++++++    Map()    +++++++++++++++++++++++++++++++++


// const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNum.map((val)=> val + 10)
// console.log(newNums);


// +++++++++++++++++ chaining 777777777777777777
// const newNum = myNum.map((num)=>num*10).map((val)=> val +1 ).filter((item)=> item % 3 == 0 && item > 50).map((final_value)=> final_value + 7)
// console.log(newNum);




//%%%%%%%%%%%%%%%%%%%%%     REDUCE     %%%%%%%%%%%%%%%%%%%%%%%
const nums = [1,2,3]
const myTotal = nums.reduce((acc, curr_val)=>acc + curr_val, "abc")
console.log(myTotal);

const cart = [
    {
    course : "js",
    price : 299
},
    {
    course : "data Science",
    price : 1299
},
    {
    course : "android",
    price : 899
}
]

console.log(cart.reduce((acc, val)=>acc + val.price, 0 ))

