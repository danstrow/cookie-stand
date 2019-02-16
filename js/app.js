'use strict';
var yugearray = [];


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

// function Shops (name, minimum, maximum, average, customerTotal) {
//   this.name = name;
//   this.minimum = minimum;
//   this.maximum = maximum;
//   this.average = average;
//   this.customerTotal = customerTotal;
// }


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
      
      
      liEl.textContent = `${hours[i]}: ${this.customerTotal} cookies`;
      firstandpikeUl.appendChild(liEl);
      yugearray.push(firstandpike);
      console.log(yugearray);
    
}
}
}
firstandpike.render ();

var seaintl = {
  name: 'seaintl',
  minimum: 3,
  maximum: 24,
  average: 1.2,
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
      
      
      liEl.textContent = `${hours[i]}: ${this.customerTotal} cookies`;
      seaintlUl.appendChild(liEl);
      yugearray.push(seaintl);
      console.log(yugearray);
    
}
}
}
seaintl.render ();

var seattlecenter = {
  name: 'seattlecenter',
  minimum: 11,
  maximum: 38,
  average: 3.7,
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
      
      
      liEl.textContent = `${hours[i]}: ${this.customerTotal} cookies`;
      seattlecenterUl.appendChild(liEl);
      yugearray.push(seattlecenter);
      console.log(yugearray);
    
    }
  }
}
seattlecenter.render ();

var caphill = {
  name: 'caphill',
  minimum: 20,
  maximum: 38,
  average: 2.3,
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
      
      
      liEl.textContent = `${hours[i]}: ${this.customerTotal} cookies`;
      caphillUl.appendChild(liEl);
      yugearray.push(caphill);
      console.log(yugearray);
    
}
}
}
caphill.render ();

var alki = {
  name: 'alki',
  minimum: 2,
  maximum: 16,
  average: 4.6,
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
      
      
      liEl.textContent = `${hours[i]}: ${this.customerTotal} cookies`;
      alkiUl.appendChild(liEl);
      yugearray.push(alki);
      console.log(yugearray);
    
}
}
}
alki.render ();


firstandpike.random();
seaintl.random();
seattlecenter.random();
caphill.random();
alki.random();

