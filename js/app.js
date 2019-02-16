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
  customerTotal: 0,
  random: function () {
    let random_number = Math.floor (Math.random() * (this.maximum - this.minimum)) + this.minimum;
    var totalCookies = Math.floor (random_number * this.average);
    return totalCookies;
  },

  render: function () {

    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
   
    
      // eslint-disable-next-line no-inner-declarations
     
      this.customerTotal = this.random();
      
      
      liEl.textContent = `${hours[i]}: ${this.customerTotal} stats`;
      firstandpikeUl.appendChild(liEl);
    
}
}
}
firstandpike.render ();

var seaintl = {
  name: 'seaintl',
  minimum: 3,
  maximum: 24,
  average: 1.2,
  random: function getRandomNumber() {
    let random_number = Math.floor (Math.random() * (this.maximum - this.minimum)) + this.minimum;
    console.log(random_number);
    return random_number;
  }

};

var seattlecenter = {
  name: 'seattlecenter',
  minimum: 11,
  maximum: 38,
  average: 3.7,
  random: function getRandomNumber() {
    let random_number = Math.floor (Math.random() * (this.maximum - this.minimum)) + this.minimum;
    console.log(random_number);
    return random_number;
  }

};

var caphill = {
  name: 'seaintl',
  minimum: 20,
  maximum: 38,
  average: 2.3,
  random: function getRandomNumber() {
    let random_number = Math.floor (Math.random() * (this.maximum - this.minimum)) + this.minimum;
    console.log(random_number);
    return random_number;
  }

};

var alki = {
  name: 'seaintl',
  minimum: 2,
  maximum: 16,
  average: 4.6,
  random: function getRandomNumber() {
    let random_number = Math.floor (Math.random() * (this.maximum - this.minimum)) + this.minimum;
    console.log(random_number);
    return random_number;
  }

};
firstandpike.random();
seaintl.random();
seattlecenter.random();
caphill.random();
alki.random();
// firstandpike.render();
