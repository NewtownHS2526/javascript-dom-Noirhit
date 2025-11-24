// TODO: Create age variable, use if to check if >= 18
// Example:
// let age = 20;
// if (age >= 18) {
//     console.log("Adult");
// }

let age = 20;

function verify (age){
    if (age >= 18) {
        console.log("Adult");
    } else if (age <= 18){
        console.log("Minor")
    } else{
        console.log("invalid age")
    }
}

verify();

