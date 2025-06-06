const accountId = 12345
let accountEmail = "abc@google.com"
var accountPassword = "xyz123"
accountState = "Madhya Pradesh"

// accountId = 54321                        Const variable cannot be changed 
// console.log(accountId);

accountEmail="xyz@google.com"               //let allows you to change the variable data   

// accountPassword = "123abc"               var is not used due to issues in block and functional scope

// accountState="UP"                        not a good practice 

console.table([accountId, accountEmail, accountPassword, accountState])

