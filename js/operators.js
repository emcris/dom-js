var x = 2;
var y = 6;

console.log(x > 18);
console.log(y > 21);
console.log('Horray!')

//Assignment May 2
// var age = 55, //stores number 
//     accompaniedByAdult = true; //stores boolean 

var age = prompt('Enter your age.');
    // accompaniedByAdult = confirm('Are you accompanied by an adult?');

    console.log(typeof parseInt(age));

if (age >= 18 && age < 21){
        accompaniedByAdult = confirm('Are you accompanied by an adult?');
    // if above statement is true
    // if (accompaniedByAdult == true) {
    //     console.log('Allowed');
    // }else{
    //     console.log('Denied');
    // }
    
    // ternary operation
    accompaniedByAdult ? console.log('Allow') : console.log('Denied');
}else if (age >= 21){
    console.log('You are free');
    

}else {
    //if above statement is false 
    console.log('Try again next year');
}

//ternary operation
// (age >= 18 && age <21) ? 
//     accompaniedByAdult ? 
//         console.log('allowed') : console.log('denied') :
//         (age >= 21) ? console.log("You are Free!")  : 
//         console.log('try again next year');

