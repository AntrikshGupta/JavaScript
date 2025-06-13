const userMail = "a@google.com"

if (userMail){
    console.log("Got user mail");
    
}
else {
    console.log("Not found");
    
}

// Falsy values

// false, 0 , -0, BigInt 0n, null, NaN, "", undefined

// REST all TRUTHY VALUES


// _______________________________    Nullish Coalescing Operator ?? ________________________________


let val1

val1 = null ?? undefined ?? 567

console.log(val1);

//________________________________   Ternary Operators ___________________________________
