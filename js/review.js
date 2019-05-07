var user = {};
var name = prompt('enter name')
console.log({name});
console.log(name);
console.log(!!isNaN(name));

// if (name === '' || name === ' ' || parseInt(name)) {
//     alert('Enter valid name');
// } else{
//     user.name = name;
// }
//everything in your if has to evaluate to true
if (name && isNaN(name)){
    user.name = name;
    var hp = prompt('Enter your HP:');
    console.log(!!hp);
    console.log(!isNaN (hp));
    
    if (hp && !isNaN(parseInt(hp)) ){
        user.power = parseInt(hp);
    }else{
        alert('enter valid hp')
    }
} else {
    alert('enter valid name');
}

//ternary
// (name === '' || name === ' ' || parseInt (name)) ?
//     alert('Enter valid name.') :
//     user.name = name;