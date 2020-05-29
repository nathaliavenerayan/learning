
//2 types of functions
//Performing a task function type
//declare function
function greet(name, lastName) {
    //body of function
    console.log('Hello ' + name + ' ' + lastName);
}

//call function and pass value for name parameter
greet('John');
//default value of variables is undefined

//John is an argument to greet function
//name is parameter of greet function
//parameter at time of declaration
//argument is valued supplied to parameter

greet('Mary', 'Smith');

//Function that calculates and returns a value
function square(number) {
    return number * number;
}

//call square function, use value to intialize a variable
//returns a value
let number = square(2);

//declare on the console
console.log(number);

//2 function calls
console.log(square(3));