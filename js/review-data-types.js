//integer

var a = 1;
var b = 3;

var sum = a + b;
var mult = a * b;

console.log(sum);
console.log(mult);

//string

var str1 = 'Today I made a glass bowl';
var str2 = 'My favorite part of End Game was fat Thor';

console.log(str1);
console.log(str2);

//boolean

var c = true;
var d = false;

console.log(84 === '84')
console.log(84 == '84')

//array

var arr1 = ['chocolate', 'mint chip', 'cookie dough'];
console.log(arr1);

arr1.push('vanilla bean')
console.log(arr1)

var arr2 = ['boxer pit', 'retrivers', 'bull dogs'];
console.log(arr2);

arr2.splice(1,1,'queensland');
console.log(arr2);

//object

var date = {
    day: 29,
    year: 2019,
    month: 'April'
};
console.log(date);
console.log(date.year);

var birthday = {
    month: 'may',
    day: 8
};
console.log(birthday);
console.log(birthday.day);