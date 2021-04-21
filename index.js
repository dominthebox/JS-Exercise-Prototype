/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
 function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  Person.prototype.eat = function(edible){
    if(this.stomach.length < 10){
      this.stomach.push(edible);
    }
  }
 Person.prototype.poop = function(){
   this.stomach = [];
 }
 Person.prototype.toString = function(){
   return `${this.name}, ${this.age}`;
 }

 const josh = new Person('Josh', 33);

 josh.eat('🍕');
 josh.eat('🍎');
 josh.eat('🍣');

console.log(josh.stomach); 

josh.poop();

console.log(josh.poop);
console.log(josh.toString());
  
  
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon) {
   this.model = model;
   this.milesPerGallon = milesPerGallon;
   this.tank = 0;
   this.odometer = 0;
  }

  Car.prototype.drive = function(distance){
    const drivableMiles = this.tank * this.milesPerGallon;

    if(distance > drivableMiles){
      this.odometer = this.odometer + drivableMiles;
      this.tank = 0;
      return `I ran out of fuel at ${this.odometer} miles!`
    }else{
      this.odometer = this.odometer + distance;
      this.tank = this.tank - (distance / this.milesPerGallon);
    }
  }


  Car.prototype.fill = function(gallons){
    this.tank = this.tank + gallons;
    }
  Car.prototype.toString = function(){
    return `${this.model}, ${this.milesPerGallon}, ${this.tank}, ${this.odometer}`;
  }
  
  const jeep = new Car('Jeep', 22);
  const wrx = new Car('WRX', 27);

  jeep.fill(20);

  console.log(jeep.toString());
  console.log(jeep.drive(250));

  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) {
      Person.call(this, name, age);
      this.favoriteToy = favoriteToy;
  }
  Baby.prototype = Object.create(Person.prototype);

  Baby.prototype.play = function(){
    return `Playing with ${this.favoriteToy}`;
  }

  const dommy = new Baby('Dommy', 4, 'Bugs-Bunny');

  console.log(dommy.play());
 
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. Window Binding - when 'this' is not given context and is used in the global scope it's value will be bound to the window/console object
    2. Implicit Binding - the most common usage of 'this' found, it means the context of 'this' is defined within an object method and whenever a function is called by a preceding dot '.' the object to the left of the dot gets 'this' 
    3. New Binding - Whenever using a constructor function, 'this' is bound to a specific instance of the object that is created and returned by the constructor function. 
    4. Explicit Binding - Whenever the call or apply method is used, 'this' is explicitly defined. 
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}