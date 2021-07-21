
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