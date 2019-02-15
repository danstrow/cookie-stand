'use strict';

var hours = [
  '6 am',
  '7 am',
  '8 am',
  '9 am',
  '10 am',
  '11 am',
  '12 pm',
  '1 pm',
  '2 pm',
  '3 pm',
  '4 pm',
  '5 pm',
  '6 pm',
];

var firstandpikeUl = document.getElementById('firstandpike');
var seaintlUl = document.getElementById('seaintl');
var seattlecenterUl = document.getElementById('seattlecenter');
var caphillUl = document.getElementById('caphill');
var alkiUl = document.getElementById('alki');


var firstandpike = {
  name: 'firstandpike',
  minimum: 23,
  maximum: 65,
  average: 6.3,
  random: function getRandomNumber() {
    let random_number = Math.floor (Math.random() * (this.maximum - this.minimum)) + this.minimum;
    console.log(random_number);
    return random_number;
  }


//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${this.shopStats[i]} stats`;
//       firstandpikeUl.appendChild(liEl);
//     render: function () {
//     console.log("testtest");
// }
// }

};

firstandpike.random();
// firstandpike.render();
