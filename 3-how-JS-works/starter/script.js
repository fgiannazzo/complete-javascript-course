// Operator Precedence

var now = 2020;
var yearJohn = 1989;
var fullAge = 18;
fullAge++;
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);
console.log(fullAge);

/*****************************
 *VARIABLES*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;
var fullAge = true
console.log(fullAge);

var job
console.log(job);
job = 'Teacher';
console.log(job);



// Type Coercion
var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable Mutation
age = 'twenty eight';
job = 'driver';

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(lastName);


// Basic Operators

var currentYear = 2020;

var ageJohn = 28;
var ageMark = 33;
var yearJohn = currentYear - ageJohn;
var yearMark = currentYear - ageMark;

console.log('John Birth Year ' + yearJohn);

console.log('Mark Birth Year ' + yearMark);

// Logical Operators

var johnOlder = ageJohn > ageMark;
console.log('Is John Older? ' + johnOlder);

*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









