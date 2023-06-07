'use strict';
/*
const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never Create a method inside a constructor function

  // this.calcAge = function () {
  //     const currentYear = new Date().getFullYear();
  //      return currentYear -  this.birthYear;
  // }
};

const jonas = new Person(`Jonas`, 1991);
// console.log(jonas);

// When we use the (new) opearator

// 1. A new Empty Object is created
// 2. The function is called with the this === Object created in 1
// 3. THis newly created object is linked to a prototype.
// 4. The function automaticslly returns {};

const matilda = new Person(`Matilda`, 2017);
const jack = new Person(`Jack`, 1975);
// console.log(jonas instanceof Person);

// Prototypes
// Each and every function automatically has a property called property.
/* Every object that is created by a certain constructor function will
 access to all methods and properties on the constructor's prototype property. */

//  console.log(Person.prototype);

/*
Person.prototype.calcAge = function () {
  return new Date().getFullYear() - this.birthYear;
};

// console.log(jonas.calcAge());
// console.log(matilda.calcAge());
// console.log(jack.calcAge());

// console.log(jonas.__proto__);

Person.prototype.species = `Homo Sapiens`;
// console.log(jonas.__proto__.species);

// console.log(jonas.hasOwnProperty(`firstName`));
// console.log(jonas.hasOwnProperty(`species`));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1,2,3,4,4,4,2,2];

 console.log(arr.__proto__);
 console.log(arr.__proto__.__proto__);

 Array.prototype.unique = function() {
    return [...new Set(this)];
 }

 console.log(arr.unique());

 const h1 = document.querySelector(`h1`);
 console.dir(h1);
 console.dir(v => v + 1); */
/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = `${speed}km/hr`;
};

const car1 = new Car(`BMW`, 120);

const car2 = new Car(`Mercedes`,95);

Car.prototype.accelerate = function () {
  this.speed = parseFloat(this.speed) + 10;
  console.log(this.speed);
}

Car.prototype.brake = function () {
  this.speed = parseFloat(this.speed) - 5;
  console.log(this.speed);
}

car1.accelerate();
car1.brake();
*/
// Class expression
// const personCl = class {
// }

/*
class PersonCl {
  constructor (fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Method will be added to the prototype property of the class PersonCL
  calcAge  () {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    name.includes(` `) && console.log(`Hey ${this._firstName}`);
    !name.includes(` `) && alert(`${name} is not a full name.`)
  }


}

const jessica = new PersonCl(`Jessica Davies`,2007);
console.log(jessica.fullName);

PersonCl.prototype.greet = function() {
  console.log(`Hey ${this.firstName}`);
}
 
// console.log(jessica.age  );
// jessica.greet();

// 1. Classes are not hoisted
// 2. Classes are firstclass citizens which means they are just a value... they can be passed into functions or returned 
// 3. Classes are activated in strict mode

// const arr = [2,4];
// console.log({arr});

const account = {
  owner:`Jonas`,
  movements:[1,2,3,4444,555,6,67,3,55],

  get latest () {
    const [arr] = this.movements.slice(-1);
    return arr;
  },

  set latest (mov) {
    this.movements.push(mov);
  }
}

// console.log(account.latest);
account.latest = 50;

// console.log(account.movements);*/

/// Getters And Setters

/*
const Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods in the PersonCL prototype They are called static methods
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return this.calcAge();
  }

  set fullName(name) {
    console.log(name); 
    // if()
    name.includes(` `)
      ? (this._fullName = name)
      : alert(`The given Name is not a full-Name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log(`Hey there 👋🏼`);
  }
}

const account = {
  owner: `Jonas`,
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.splice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
account.latest = 23;
// console.log(account.latest);

const me = new PersonCl(`Divine Amunega`, 2007);

Person.hey = function(){
  console.log(`Hey 👋🏼`);
}
// console.log(me.age);
*/

/*
const PersonProto = {
  calcAge() {
    return new Date().getFullYear() - this.birthYear;
  },

  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear
  }
};

const steven = Object.create(PersonProto);
steven.init(`Steven`,2007);
steven.calcAge();

console.log(steven.calcAge());

console.log(steven.__proto__ === PersonProto);

const divine = Object.create(PersonProto);
*/

/// Coding Challenge 2

/*

class Car{
  constructor(make,speed) {
    this.make = make;
    this.speed = `${speed}km/hr`;
  }

  accelerate(){
    this.speed = `${Number.parseFloat(this.speed) + 10}km/hr`;
  }

  brake(){
    this.speed = `${Number.parseFloat(this.speed) - 10}km/hr`;
  }

  get speedUS(){
    return `${Number.parseFloat(this.speed) / 1.6}mi/hr`;
  }

  set speedUS(speed) {
    this.speed = `${speed * 1.6}km/hr`;
  }



}


const ford = new Car(`Ford`,120);
// ford.speedUS = 100;
ford.accelerate();
ford.accelerate();
console.log(ford);
*/

/*
const Person = function (firstName, birthYear) {
  this.birthYear = birthYear;
  this.firstName = firstName;
};

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName,birthYear);
  this.course = course;
};

// Linking Prototypes
Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student(`Mike`, 2020, `Computer Science`);
// console.dir(Person.__proto__);

console.log(mike);

mike.calcAge();

console.log(mike.__proto__ === Student.prototype);

Student.prototype.constructor = Student;



function Car(make, speed) {
  this.make = make;
  this.speed = `${speed}km/hr`;
}


Car.prototype.accelerate = function () {
  this.speed = `${Number.parseFloat(this.speed) + 10}km/hr`;
};

Car.prototype.brake = function () {
  this.speed = `${Number.parseFloat(this.speed) - 10}km/hr`;
};

Car.prototype.speedUS = function () {
  return `${Number.parseFloat(this.speed) / 1.6}mi/hr`;
};

Car.prototype.speedUS = function (speed) {
  this.speed = `${speed * 1.6}km/hr`;
};

const benz = new Car(`Benz`, 120);
benz.speedUS = 100;

const ElectricCar = function (make, speed, charge) {
  Car.call(this, make, speed);

  this.charge = `${charge}%`;
};
// console.log(Car.prototype);

ElectricCar.prototype = Object.create(Car.prototype);


ElectricCar.prototype.accelerate = function () {
  this.speed = `${Number.parseFloat(this.speed + 20)}km/hr`;
  
  this.charge = `${+this.charge.slice(0, this.charge.length - 1) - 1}%`;
  console.log(
    `${this.make} going at a speed of ${this.speed} at a charge of ${this.charge}`
  );
};

ElectricCar.prototype.chargeBattery = function (val) {
  this.charge = `${Number.parseFloat(val)}`;
};

ElectricCar.prototype.constructor = ElectricCar;
const tesla = new ElectricCar(`Tesla`, 120, 23);
tesla.accelerate();
tesla.brake();
console.log(tesla);
// console.log(tesla.__proto__ === ElectricCar.prototype);
ElectricCar.prototype.constructor = ElectricCar;
// console.dir(Car);
// console.dir(ElectricCar);


/////////////////////////////////
// Inhertance Between Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
}

class StudentCl extends PersonCl {
  constructor(firstName, lastName, courses) {
    super(firstName, lastName);
    this.courses = courses;
  }
}

const divine = new StudentCl(`Divine`, 2007, `Computer Science`);
console.log(divine);
*/

/*
const PersonProto = {
  calcAge() {
    console.log(`${2037 - this.birthYear}`);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const divine = Object.create(PersonProto);
divine.init(`Divine`, 2007);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function(firstName,birthYear,course)  {
  PersonProto.init.call(this,firstName,birthYear);

  this.course = course;
}
StudentProto.introduce = function () {
  console.log(`Hello, I'm ${this.firstName} and i'm currently studying ${this.course}`);
}

StudentProto.isBoy = true;
const divi = Object.create(StudentProto);
divi.init(`Divine`,2007,'Computer Science');
divi.calcAge()
console.log(divi);
*/

// Public Fields
// Private Fields
// Public Methods
// Private Methods

/*
class Account {
  // 1) Public Fields
  local = navigator.language;

  //2) Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.#pin = pin;
    this.currency = currency;

    // this._movements = [];
    this.local = navigator.language;

    console.log(`Thanks for Opening An Account ${this.owner}`);
  }

  // Public Methods
  getmovements() {
    return this.#movements;
  }

  // Public Interface
  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdrawal(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
    return this;
  }

  // Private Methods

  #approveLoan(val) {
    return true;
  }
}

const acct1 = new Account(`Jonas`, `EUR`, 1111);
acct1.deposit(250);
acct1.withdrawal(140);
acct1.requestLoan(1000);

console.log(acct1);

// Chaining
acct1
  .deposit(300)
  .deposit(500)
  .withdrawal(35)
  .requestLoan(25_000)
  .withdrawal(4000);

console.log(acct1.getmovements());

console.dir(typeof Account);
*/


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make,speed,charge){
    super(make,speed);
    this.#charge = charge;
  }

  accelerate(){
    this.speed += 20;
    this.#charge--;
    return this;
  }

  chargeBattery(chargeTo){
    this.#charge = chargeTo;
    return this;
  }
}


const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);