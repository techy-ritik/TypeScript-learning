/** variable decalration */
//--------------------------
let price: number = 10; // we should always assign dataType for which we r going to use this variable
console.log(price);

let city: string = "kolkata";
city = "patna"; //  the variable which is assigned for a particular dataTypes can only store only store that dataType value late also
city = "nalanda";

let isLoggedIn: boolean;
isLoggedIn = true;

/** type inferance */
//----------------------
// if we don't assign any dataType exeplecitely to the variable then the type of value we store for the first time initialization, that dataType get assigned to the variable itself and then late we can only store that dataType of value to that variable 

let name = "Ritikesh";
// name = 10 ;  // it can't store any other value than the string now
name = "aman";

/** functions */
//---------------
function students(name: string, age: number) {
  // we should assign the dataType of the parameter which is to be passed in the function so that it get fixed that what type of values we have to pass while calling the function
  console.log(name, age);
}

students("Ritikesh", 5);

function sayHello(name: string): void {
  console.log("Hello, " + name);
}

// sayHello();       // we can't call the function without any argument when we have some set parameter in function declaration and we must pass the same dataType value argument as what we assigned

/** objects */
//-------------
let address : {city : string,pincode:number} ={    // we have to assign dataType before the object structure for the key which is to be used in the object for storing values 
    city : "Nalanda",
    pincode : 801301,
}


/** Array */
//------------
// if we want any array to strictly store elements of a particular dataType then we should assign it during array declration and then we can only store elments of that assigned dataTpes
let arr : number[] = [1,2,4];
arr.push(2);  
// arr.push("ritikesh");   // it can't be added due to dataType changed


/** "Any" dataType */
//-----------------------
// if we want to initialize a variable which can be used for storing any dataType values just same as the variable we initialize with let in js then we have to assign with 'Any' dataType to that variable

let a : any = 10;
a="Ritik";
a = true;             //  here as i've assigned the variable with any dataType , so we can store any value of any dataType

/** union types */
// we can assign more than one dataType to a variable, as in that variable we can store value with either of the assigned dataType

let x : string | number;

x = 99;
x = "hundred";      // here we can store value of type string or number as both are assigned with this variable 


/** interface */
// we can set a format of assigning dataTypes to an object keys and then use that variable as dataType of any other object which required to be assigned with those dataType as the declared one 

interface studentType {
    name : string,
    age: number,
    height: number
}

const student : studentType = {
    name : "ritikesh",
    age: 25,
    height: 5.5 ,
}


/** type narrowing */
//on the basis of type of data we are getting, we reduce number of lines of code execution is called type narrowing
// we can also declare a variable by assigning it with multiple dataTypes and then use that variable as dataType of any other variable which required to be assigned with those dataType as the declared one 

type marksType = string | number;

function printMarks(marks : marksType){
    if(typeof marks === "string"){
        console.log(marks.toUpperCase())
    }
    else{
        console.log(marks);
    }

}


printMarks(100);
printMarks("fifty")

