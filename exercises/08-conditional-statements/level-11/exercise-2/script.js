// TODO: Use if-else to check age
// Example:
// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
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