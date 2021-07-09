'use strict';
// chain scope
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //console.log(firstName);
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven'; // variable lookup
      const str = `You're a milenial,  ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      output = 'NEW OUTPUT'; // this is still in the block scope that is child of printAge scope so we can reassign variable
    }
    //console.log(str); error const and let are block scoped but not var that is function scoped (in this case printAge)
    console.log(millenial);
    // add(2, 3); functions are also block scoped but only in strict mode
    //console.log(add(2, 3)); try with strict mode commented
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'John';
calcAge(1991);
//console.log(age); error
//console.log(printAge);  error
//console.log(output); error

// hoisting

console.log(fNmane);
//console.log(job);
//console.log(year);

var fNmane = 'rick';
const job = 'programmer';
let year = 1991;

console.log(addDecl(2, 3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// EXAMPLE

console.log(numProducts); //at this point numProduct is undefined because of hoisting
if (!numProducts) {
  //at this point numProduct is undefined because of hoisting
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log('all products deleted');
}

console.log(this);
//regular function call
const calcAge1 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //will be undefined in strict mode.....not in strict mode will point to the global window object
};
calcAge1(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // will point to the global window object because this in arrow function point to its parent function or parent scope
};
calcAgeArrow(1991);

const hulk = {
  year: 1990,
  calcAge: function () {
    console.log(this); //in this case this keyword will point to the object that is calling the method
    console.log(2037 - this.year);
  },
};
hulk.calcAge();

const leon = {
  year: 2017,
};

leon.calcAge = hulk.calcAge; // copied method from one object to another (method borrowing)
leon.calcAge();
//const f = hulk.calcAge; // f() = undefined because its a regular function call

const hulk1 = {
  firstName: 'Hulk',
  year: 1990,
  calcAge: function () {
    console.log(this); //in this case this keyword will point to the object that is calling the method
    console.log(2037 - this.year);

    //solution 1
    const self = this;

    const isMillenial = function () {
      console.log(self);
      console.log(this); //undefined because in a regular function call this keyword is undefined (solution: to set a variable ex: self = this outside isMillenial function)
      console.log(self.year >= 1961 && self.year <= 1996);
      //console.log(this.year >= 1961 && this.year <= 1996);
    };
    isMillenial();
    // solution 2 is to use arrow function because arrow function does not contains its own this keyword, so it will take this from its parent function/method (calcAge where this is hulk1 object)(scope chain)
    const isMillenial1 = () => {
      console.log(this);
      console.log(self.year >= 1961 && self.year <= 1996);
    };
    isMillenial1();
  },
  greet: () => console.log(`Hey, ${this.firstName}`),
};
hulk1.greet(); // uotput will be Hey, undefined it will look up into global scope (in this case window object wich does not contains firstName)
hulk1.calcAge();

//Arguments keyword
const addExpression = function (a, b) {
  console.log(arguments);
  return a + b;
  //for (let index = 0; index < arguments.length; index++) {
  //   const element = arguments[index];
  //   console.log(element);
  // }
};
addExpression(2, 3);
addExpression(2, 3, 8, 12);

//var addArrow = (a, b) => {
//console.log(arguments);
// return a + b}; arrow functions does not have arguments keyword

//Primitives vs. Objects (reference data types)
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const dude = {
  name: 'dudeName',
  age: 30,
};

const friend = dude;
friend.age = 27;

console.log('Friend:', friend);
console.log('dude:', dude);

//Practice
let lastName = 'williams';
let oldLastName = lastName;
lastName = 'davis';

const johnny = {
  firstName: 'John',
  lastName: 'Johnson',
  age: 27,
};

const t = johnny;
t.lastName = 'ggg';

console.log(johnny);
console.log(t); // the same object

// copying objects
const johnny2 = {
  firstName: 'John',
  lastName: 'Johnson',
  age: 27,
  family: ['Alice', 'Bob'], // array is object
};

const copiedObject = Object.assign({}, johnny2); // in this case object is copied, but the inner objects remains the same (see the array)
copiedObject.lastName = 'davis';
console.log(copiedObject.lastName);
console.log(johnny2);
console.log(copiedObject);
copiedObject.family.push('mary'); // it will add for both objects
copiedObject.family.push('harry');
console.log(johnny2);
console.log(copiedObject);
