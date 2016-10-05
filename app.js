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
