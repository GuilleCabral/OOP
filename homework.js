
/*Day 3 homeWork*/
var Car = function(maxSpeed, driver){
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time){
        console.log(speed, time);
    };
    this.logDriver = function(){
        console.log("The driver name is " + this.driver);
    };
}

var myCar = new Car(70, "Grandma");
var myCar2 = new Car(80, "John");
var myCar3 = new Car(50, "Carl");
var myCar4 = new Car(60, "James");

myCar.drive(30,5);
myCar3.logDriver();

/*Day 4 homeWork*/
let dog = {
    name: "Bill",
    numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);


let dog = {
    name: "Bill",
    numLegs: 4,
    sayLegs: function(){
        return "This dog has 4 legs";
    }
};
dog.sayLegs();


let dog = {
    name: "Bill",
    numLegs: 4,
    sayLegs: function(){
        return "This dog has " + this.numLegs + " legs";
    }
};
dog.sayLegs();


function Dog() {
    this.name = "Bob";
    this.color = "blue";
    this.numLegs = 5; 
}


function Dog() {
    this.name = "Bob";
    this.color = "blue";
    this.numLegs = 5; 
}
let hound = new Dog();


function Dog(name, color){
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
let terrier = new Dog("Ruy","red");


function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(2);
myHouse instanceof House;


function Bird(name){
    this.name = name;
    this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
        ownProps.push(property);
    }
}


function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Chester");


function Dog(name) {
    this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Cheessy");
let ownProps = [];
let prototypeProps = [];
for( let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(push);
    }
}


function Dog(name) {
    this.name = name;
}
function joinDogFraternity(candidate) {
    return candidate.constructor === Dog;
}


function Dog(name) {
    this.name = name;
}
Dog.prototype = {
    numLegs: 4,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
}


function Dog(name) {
    this.name = name;
}
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
}


function Dog(name) {
    this.name = name;
}
let beagle = new Dog("Franky");
Dog.prototype.isPrototypeOf(beagle);


function Dog(name) {
    this.name = name;
}
let beagle = new Dog("Franky");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);


function Cat(name) {
    this.name = name;
  }
  Cat.prototype = {
    constructor: Cat,
  };
  function Bear(name) {
    this.name = name;
  }
  Bear.prototype = {
    constructor: Bear,
    };
  function Animal() { }
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
};


function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);


function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
let beagle = new Dog();


function Animal() { }
function Bird() { }
function Dog() { }
Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
let duck = new Bird();
let beagle = new Dog();


function Animal() { }
Animal.prototype.eat = function() {
    console.log("nom nom nom");
  };
function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log("Woof!")
}
let beagle = new Dog();


function Bird() { }
Bird.prototype.fly = function() { return "I am flying!"; };
function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype,fly = function() {
return "Alas, this is a flightless bird";
}
let penguin = new Penguin();
console.log(penguin.fly());


let bird = {
    name: "Donald",
    numLegs: 2
  };
let boat = {
    name: "Warrior",
    type: "race-boat"
  };
let glideMixin = function(obj){
    obj.glide = function(){
      console.log("Gliding");
    }
  }
  glideMixin(bird);
  glideMixin(boat);


  function Bird() {
    let weight = 15;
    this.getWeight = function(){
    return weight;
  }
  }


  (function() {
    console.log("A cozy nest is ready");
  })();


  
let funModule = (function(){
    return{
      isCuteMixin: function(obj) {
        obj.isCute = function() {
      return true;
    };
  },
      singMixin: function(obj) {
        obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
    }
  }})();