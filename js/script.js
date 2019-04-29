var anchor = document.querySelector('a');
console.log(anchor);

var allAnchor = document.querySelectorAll('a');
console.log(allAnchor);

allAnchor[1].textContent = 'This text is set from JS using DOM';

allAnchor[1].href = 'https://google.com';
allAnchor[1].target = 'blank';

var para1 = document.getElementById('para-1');
console.log(para1);
var para1UsingSelector = document.querySelector ('#para-1');
console.log(para1UsingSelector);
para1.style.color = 'tomato';

var btn = document.getElementsByClassName('button');
console.log(btn[0]);

btn[0].style.padding = 