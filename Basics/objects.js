const callsign = Symbol("key1");

const JS_User = {
    name: "Antriksh",
    "full name": "Antriksh gupta",
    age: 25,
    [callsign]:"lytspd",
    location: "Indore",
    email:"Abc@google.com",
    isLoggedIn: false,
    lastlogin: ["Monday","Friday"]
}

// console.log(JS_User.name);
// console.log(JS_User["email"]);
// console.log(JS_User["full name"]);
// console.log(typeof JS_User[callsign]);



// Object.freeze(JS_User)
// JS_User["email"]= "abc@amazon.com"           As we have freezed the object so no changes are propagated
// console.log(JS_User["email"]);

// JS_User.greetings = function(){
//     console.log(`Hello ${JS_User["full name"]}`);
    
// }
// console.log(JS_User.greetings);              Returns [Function (anonymous)]
// console.log(JS_User.greetings());            Hello Antriksh Gupta      undefined(as we have used console.log() for calling)
// JS_User.greetings()                          Hello Antriksh Gupta     no undefined will come as direct function is called. 

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const obj = new Object();               //SINGLETON OBJECT

const tinderUser = {}

tinderUser.id = "abc123"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "regular@google.com",
    fullName:{
        userFullName:{
            firstName: "Antriksh",
            lastName: "Gupta"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);        nesting of objects
// console.log(regularUser.fullName?.userFullName.firstName);       Optional chaining, suppose aage first name aya hi nhi toh??

const obj1 = {1:"A", 2:"B"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = Object.assign({},obj1,obj2)            //good technique to use {} empty obj to ensure they are assigned into an obj only in a proper manner

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

// console.log(Object.keys(tinderUser));                RETURNS AN ARRAY OF KEYS
// console.log(Object.values(tinderUser));              RETURNS AN ARRAY OF VALUES 
// console.log(Object.entries(tinderUser));             RETURNS AN ARRAY OF ENTRIES

// console.log(tinderUser.hasOwnProperty("isLoggedOut"));       CHECKS WHETHER IT HAS A PROPERTY MENTIONED OR NOT

//++++++++++++++++++++++++++++++++++++++++++  OBJECT DESTRUCTURING +++++++++++++++++++++++++++++++++++++++++++++++

const course = {
    courseName : "JavaScript aur Chai",
    coursePrice : 999,
    courseInstructor : "Sundar Nadella"
}

const {courseInstructor} = course;          // Destructuring course.courseInstructor to courseInstructor only
const {courseInstructor: Inst} = course;    // Destructuring course.courseInstructor to Inst only

// console.log(Inst);


// ***********************************JSON API INTRO *******************************************



// JSON can bring an object/dictionary/array as a result



/*


{"results":[{"gender":"female","name":{"title":"Mrs","first":"Hannah","last":"Edwards"},"location":{"street":{"number":1771,"name":"Carrington Road"},"city":"New Plymouth","state":"Marlborough","country":"New Zealand","postcode":29916,"coordinates":{"latitude":"48.3021","longitude":"7.2654"},"timezone":{"offset":"-10:00","description":"Hawaii"}},"email":"hannah.edwards@example.com","login":{"uuid":"52812196-3cf0-4ac2-9275-d7ca6a7ce0af","username":"greensnake508","password":"hookem","salt":"Y9cPXhwi","md5":"c3aef9721e2b0ee32a54981df94ccf80","sha1":"76c00fe9b2cff6cae77f9bc1cc950808083bccfb","sha256":"bd5f16f53a4212a0e98f25337280b187809d2d6c15ad1e36d759c53376d3936a"},"dob":{"date":"1987-07-10T11:34:26.126Z","age":37},"registered":{"date":"2015-02-02T03:58:26.784Z","age":10},"phone":"(647)-806-9660","cell":"(435)-251-6617","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/41.jpg","medium":"https://randomuser.me/api/portraits/med/women/41.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/41.jpg"},"nat":"NZ"}],"info":{"seed":"d007d8a5e64f561e","results":1,"page":1,"version":"1.4"}}


*/
