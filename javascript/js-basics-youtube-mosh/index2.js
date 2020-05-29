//use const if you want constant to be unchanged, otherwise use let
const interestRate = 0.3;
//interestRate = 1;

console.log(interestRate);

let name = "Nathalia"; //String literal
let age = 23;   //Number literal
let isApproved = true; //
let firstName = undefined;
let lastName = null; //use if you want to clear the value of a variable
let selectedColor = null;
//another primitive symbol in the course


//can use typeof name to check type of variable
//dynamic language. type of var determined at runtime based on values assigned

//declare a person object
let person = {
    name: "Nathalia",
    age: 30
}; //object literal {}

//Dot Notation to access a property
person.name = "John";

//Bracket Notation
let selection = 'name';
person[selection] = "Mary";

console.log(person.name);