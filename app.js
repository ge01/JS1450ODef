/*******************************************************************************
*                  Objects are Variables Containing Variables                  *
********************************************************************************/
var person = {
  firstName : "John",
  lastName  : "Doe",
  age       : 50,
  eyeColor  : "blue"
};

document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName;

/*******************************************************************************
*                    Using the JavaScript Keyword new                          *
********************************************************************************/
var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

document.getElementById("demo1").innerHTML = person.firstName + " is " + person.age + " years old.";

/*******************************************************************************
*                        Using an Object Constructor                           *
********************************************************************************/
function person1(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var myFather = new person1("John", "Doe", 50, "blue");
var myMother = new person1("Sally", "Rally", 48, "green");

document.getElementById("demo2").innerHTML =
"My father is " + myFather.age + ". My mother is " + myMother.age;
