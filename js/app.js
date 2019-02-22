'use strict';
var yugearray = [];
var theTable = document.getElementById('sales-table');

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
  '7 pm',
  '8 pm',
];

function CookieStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerSale, id) {
  this.locationName = locationName; 
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  this.id = id;
  this.calcCustomersEachHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCustomersPerHour, this.maxCustomersPerHour));
    }
  };
  this.calcCookiesEachHour = function() {
    this.calcCustomersEachHour();
    for (var i = 0; i < hours.length; i++) {
      var oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  };
  yugearray.push (this);
}

CookieStand.prototype.render = function() {
  this.calcCookiesEachHour();
  
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  tdEl.textContent = this.locationName;
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  }

  var thEl = document.createElement('th');
  thEl.textContent = this.totalDailyCookies;
  trEl.appendChild(thEl);
  theTable.appendChild(trEl);
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Location Totals';
  trEl.appendChild(thEl);
  theTable.appendChild(trEl);
}
function makeFooterRow() {
  var trEl = document.createElement('tr');
  
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);
  var thisDaysTotal = 0;
  for(var i = 0; i < hours.length; i++) {
    var thisHoursTotal = 0;
    for (var j = 0; j < allShops.length; j++) {
      thisHoursTotal = thisHoursTotal + yugearray[j].cookiesEachHour[i];
    }
    thisDaysTotal = thisDaysTotal + thisHoursTotal;
    thEl = document.createElement('th');
    thEl.textContent = thisHoursTotal;
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = thisDaysTotal;
  trEl.appendChild(thEl);
  theTable.appendChild(trEl);
}

makeHeaderRow ();
var pikePlace = new CookieStand('Pike Place Market', 23, 65, 6.3, 'pike');
var seatacAirport = new CookieStand('Seatac Airport', 3, 24, 1.2, 'seatac');
var seattleCenter = new CookieStand('Seattle Center', 11, 38, 3.7, 'seattlecenter');
var capitolHill = new CookieStand('Capitol Hill', 20, 38, 2.3, 'caphill');
var alki = new CookieStand('Alki', 2, 16, 4.6, 'alki');


var allShops = [pikePlace, seatacAirport, seattleCenter, capitolHill, alki];

(function renderTable() {
  for(var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
})();
makeFooterRow ();
// (function renderTable() {
//   makeFooterRow();
//   for(var i = 0; i < allShops.length; i++) {
//     allShops[i].render();
//   }
// })();


// var makeShops = [];
// var totalCookies = [];

// var SalmonCookieData = document.getElementById('SalmonCookieData');
// // var firstandpikeUl = document.getElementById('firstandpike');
// // var seaintlUl = document.getElementById('seaintl');
// // var seattlecenterUl = document.getElementById('seattlecenter');
// // var caphillUl = document.getElementById('caphill');
// // var alkiUl = document.getElementById('alki');

// //Constructor function for all shops
// function Shop(name, minimum, maximum, average) {
//   this.name = name;
//   this.minimum = minimum;
//   this.maximum = maximum;
//   this.average = average;
//   this.customerTotal = [];

//   for (var i = 0; i < hours.length; i++) {
//     this.customerTotal.push(randomCustomer(this.minimunm, this.maximum, this.average));
//   }
// }
// function randomCustomer(minimum, maximum, average) {
//   this.customerTotal.push(randomCustomer(this.minimum, this.maximum, this.average));
// }
// function newShops() {
//   // makeHeaderRow();
//   new Shop('firstandpike', 23, 65, 6.3);
//   new Shop('seaintl', 3, 24, 1.2);
//   new Shop('seattlecenter', 11, 38, 3.7);
//   new Shop('caphill', 20, 38, 2.3);
//   new Shop('alki', 2, 16, 4.6);
//   // makeTotalsRow();
//   makeShops.push(this);
// }

// // this code below is what we were using to make table in class demo
// // function makeHeaderRow() {
// //   var trEl = document.createElement('tr');
// //   var thEl = document.createElement('th');
// //   thEl.textContent = 'Store Name';
// //   trEl.appendChild(thEl);
// //   for (var i = 0; i < hours.length; i++) {
// //     thEl = document.createElement('th');
// //     thEl.textContent = hours[i];
// //     trEl.appendChild(thEl);

// //     thEl = document.createElement('th');
// //     thEl.textContent = 'Store Totals';
// //     trEl.appendChild(thEl);
// //     theTable.appendChild(trEl);

// //   }
// // }

// // (function renderTable() {
// //   makeHeaderRow();
// // })();

// var makeTable = document.getElementById('SalmonCookieData');
// var trEl = document.createElement('tr');
// for (var i = 0; i < hours.length; i++) {
//   var tdEl = document.createElement('td');
//   tdEl.textContent = hours[i];
//   trEl.appendChild(tdEl);
// }
// makeTable.appendChild(trEl);

// var table = document.getElementById('shell');
// var data = [];
// function makeTableRow() {
//   for (var i = 0; i < hours.length; i++)
// }
// function makeHeaderRow() {
//   for (var i = 0; i < hours.length; i++) {
//     data.push(
//       '<tr>' + hours[i].hours + '</tr>',
//       '<tr>' + hours[i].DailyLocationTotal + '</tr>'
//       )
//     }

//   }
// function randomCustomer(Shop) {

//   var random_number = Math.floor(Math.random() * (this.maximum - this.minimum)) + this.minimum;
//   totalCookies = Math.floor(random_number * this.average);
//   return totalCookies;
  // function makeHeaderRow () {
  //   var SalmonCookieData = document.getElementById ('SalmonCookieData');
  //   var thEl = document.createElementById ('th');
  //   SalmonCookieData.appendChild('th');
  //   for( var i = 0; i < hours.length; i++) {
  //     var thEl = document.createElement('th');
  //   }
  // }
  // function makeTotalsRow () {
  //   var SalmonCookieData = document.getElementById ('SalmonCookieData');
  //   var thEl = document.createElementById ('tr');
  //   SalmonCookieData.appendChild('tr');
  //   for( var i = 0; i < hours.length; i++) {
  //     var trEl = document.createElement('tr');
//   }
  // }









// this.cookieTotal = function() {
// return this.cookie;


// firstandpikeShops.random (); {}

// var firstandpike = {
//   name: 'firstandpike',
//   minimum: 23,
//   maximum: 65,
//   average: 6.3,
//   customerTotal: 0,
//   random: function () {
//     let random_number = Math.floor (Math.random() * (this.maximum - this.minimum)) + this.minimum;
//     var totalCookies = Math.floor (random_number * this.average);
//     return totalCookies;
//   },

//   render: function () {

//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');


//       // eslint-disable-next-line no-inner-declarations

//       this.customerTotal = this.random();


//       liEl.textContent = `${hours[i]}: ${this.customerTotal} cookies`;
//       firstandpikeUl.appendChild(liEl);
//       yugearray.push(firstandpike);
//       console.log(yugearray);

// }
// }
// }
// firstandpike.render ();

// var seaintl = {
//   name: 'seaintl',
//   minimum: 3,
//   maximum: 24,
//   average: 1.2,
//   customerTotal: 0,
//   random: function () {
//     let random_number = Math.floor (Math.random() * (this.maximum - this.minimum)) + this.minimum;
//     var totalCookies = Math.floor (random_number * this.average);
//     return totalCookies;
//   },

//   render: function () {

//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');


//       // eslint-disable-next-line no-inner-declarations

//       this.customerTotal = this.random();


//       liEl.textContent = `${hours[i]}: ${this.customerTotal} cookies`;
//       seaintlUl.appendChild(liEl);
//       yugearray.push(seaintl);
//       console.log(yugearray);

// }
// }
// }
// seaintl.render ();

// var seattlecenter = {
//   name: 'seattlecenter',
//   minimum: 11,
//   maximum: 38,
//   average: 3.7,
//   customerTotal: 0,
//   random: function () {
//     let random_number = Math.floor (Math.random() * (this.maximum - this.minimum)) + this.minimum;
//     var totalCookies = Math.floor (random_number * this.average);
//     return totalCookies;
//   },

//   render: function () {

//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');


//       // eslint-disable-next-line no-inner-declarations

//       this.customerTotal = this.random();


//       liEl.textContent = `${hours[i]}: ${this.customerTotal} cookies`;
//       seattlecenterUl.appendChild(liEl);
//       yugearray.push(seattlecenter);
//       console.log(yugearray);

//     }
//   }
// }
// seattlecenter.render ();

// var caphill = {
//   name: 'caphill',
//   minimum: 20,
//   maximum: 38,
//   average: 2.3,
//   customerTotal: 0,
//   random: function () {
//     let random_number = Math.floor (Math.random() * (this.maximum - this.minimum)) + this.minimum;
//     var totalCookies = Math.floor (random_number * this.average);
//     return totalCookies;
//   },

//   render: function () {

//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');


//       // eslint-disable-next-line no-inner-declarations

//       this.customerTotal = this.random();


//       liEl.textContent = `${hours[i]}: ${this.customerTotal} cookies`;
//       caphillUl.appendChild(liEl);
//       yugearray.push(caphill);
//       console.log(yugearray);

// }
// }
// }
// caphill.render ();

// var alki = {
//   name: 'alki',
//   minimum: 2,
//   maximum: 16,
//   average: 4.6,
//   customerTotal: 0,
//   random: function () {
//     let random_number = Math.floor (Math.random() * (this.maximum - this.minimum)) + this.minimum;
//     var totalCookies = Math.floor (random_number * this.average);
//     return totalCookies;
//   },

//   render: function () {

//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');


//       // eslint-disable-next-line no-inner-declarations

//       this.customerTotal = this.random();


//       liEl.textContent = `${hours[i]}: ${this.customerTotal} cookies`;
//       alkiUl.appendChild(liEl);
//       yugearray.push(alki);
//       console.log(yugearray);

// }
// }
// }
// alki.render ();


// firstandpike.random();
// seaintl.random();
// seattlecenter.random();
// caphill.random();
// alki.random();

