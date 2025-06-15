// For loop 

// for (let i = 1; i < 11; i++) {
//     console.log(`Inside the Outer Loop ${i}`);
    
//     for (let j = 1; j < 11; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }


const heroes = ["IronMan","Captain America","Hulk","Black Widow","Hawkeye","Thor"]
for (let i = 0; i < heroes.length; i++) {
    const element = heroes[i];
    console.log(`The OG AVENGER number ${i+1} is ${heroes[i]}.`);
}

