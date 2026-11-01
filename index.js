"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** variable decalration */
//--------------------------
let price = 10; // we should always assign dataType for which we r going to use this variable
console.log(price);
let city = "kolkata";
city = "patna"; //  the variable which is assigned for a particular dataTypes can only store only store that dataType value late also
city = "nalanda";
let isLoggedIn;
isLoggedIn = true;
/** type inferance */
//----------------------
// if we don't assign any dataType exeplecitely to the variable then the type of value we store for the first time initialization, that dataType get assigned to the variable itself and then late we can only store that dataType of value to that variable 
let name = "Ritikesh";
// name = 10 ;  // it can't store any other value than the string now
name = "aman";
/** functions */
//---------------
function students(name, age) {
    // we should assign the dataType of the parameter which is to be passed in the function so that it get fixed that what type of values we have to pass while calling the function
    console.log(name, age);
}
students("Ritikesh", 5);
function sayHello(name) {
    console.log("Hello, " + name);
}
// sayHello();       // we can't call the function without any argument when we have some set parameter in function declaration and we must pass the same dataType value argument as what we assigned
/** objects */
//-------------
let address = {
    city: "Nalanda",
    pincode: 801301,
};
/** Array */
//------------
// if we want any array to strictly store elements of a particular dataType then we should assign it during array declration and then we can only store elments of that assigned dataTpes
let arr = [1, 2, 4];
arr.push(2);
// arr.push("ritikesh");   // it can't be added due to dataType changed
/** "Any" dataType */
//-----------------------
// if we want to initialize a variable which can be used for storing any dataType values just same as the variable we initialize with let in js then we have to assign with 'Any' dataType to that variable
let a = 10;
a = "Ritik";
a = true; //  here as i've assigned the variable with any dataType , so we can store any value of any dataType
/** union types */
// we can assign more than one dataType to a variable, as in that variable we can store value with either of the assigned dataType
let x;
x = 99;
x = "hundred"; // here we can store value of type string or number as both are assigned with this variable 
function printMarks(marks) {
    if (typeof marks === "string") {
        console.log(marks.toUpperCase());
    }
    else {
        console.log(marks);
    }
}
printMarks(100);
printMarks("fifty");
//# sourceMappingURL=index.js.map