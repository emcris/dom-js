//if condition
// var hour = 1;
var hour = prompt ('What hour is it? 0-24')
// if (hour > 18) {
//     console.log('class has started')
// }
// if (hour < 21) {
//     //continue class
//     console.log('continue class');
// }

if (hour > 18 && hour < 21) {
    console.log('class hours');
} else if (hour > 0 && hour < 4) {
    console.log('sleep time');
}else {
    console.log('non class hours')
}


var minute = prompt ('How many minutes past the hour?');
//switch conditions
switch(minute) {
    case 0:
        console.log('hour has just begun');
        break;
    case 30:
        console.log('almost next hour');
        break;
    default:
        console.log('waiting for hext hour');
}

var color = 'red';
switch(color) {
    case 'blue':
        console.log('blue');
        break;
    case 'yellow':
        console.log('yellow');
        break;
    case 'default':
        console.log('color not found');
        break;

}