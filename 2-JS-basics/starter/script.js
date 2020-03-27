
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



/*
// Coding Challenge 5

var tipTiers = {
    johnPercentage: [.20,.15,.10],
    johnTiers: [50, 200],
    markPercentage: [.20,.10,.25],
    markTiers: [100, 300]
}


function tipCalculator(amount, tipper) {
    var p = [];
    var t = [];
    if(tipper == 'John') {
        var i = 0
        tipTiers.johnPercentage.forEach(element => {
            p[i] = element;
            i++;
        });
        i = 0
        tipTiers.johnTiers.forEach(element => {
            t[i] = element;
            i++;
        });
    } else if(tipper == 'Mark') {
        var i = 0
        tipTiers.markPercentage.forEach(element => {
            p[i] = element;
            i++;
        });
        i = 0
        tipTiers.markTiers.forEach(element => {
            t[i] = element;
            i++;
        });
    }

    if(amount < t[0]) {
        return (amount*p[0]);
    } else if (amount <= t[1] && amount >= t[0]) {
        return (amount*p[1]);
    } else if (amount > t[1]) {
        return (amount*p[2]);
    } 
}

var billsJohn = {
    bill: [124, 48, 268, 180, 42],
    tip: [],
    total: []
}

var billsMark = {
    bill: [77, 375, 110, 45],
    tip: [],
    total: []
}

for (var i = 0; i < billsJohn.bill.length; i++) {
    billsJohn.tip.push(tipCalculator(billsJohn.bill[i],'John'));
    billsJohn.total.push((billsJohn.tip[i]) + billsJohn.bill[i]);
}

for (var i = 0; i < billsMark.bill.length; i++) {
    billsMark.tip.push(tipCalculator(billsMark.bill[i],'Mark'));
    billsMark.total.push((billsMark.tip[i]) + billsMark.bill[i]);
}

console.log(billsJohn);
console.log(billsMark);



// Loops and Iteration

var john = ['John', 'Smith', 1990, 'teacher', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While Loop
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}


// Continue and Break Statements
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

// break
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Coding Challenge 4

var Mark = {
    fullName: 'Mark Dole',
    mass: 120,
    height: 1.6,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height); 
        return this.BMI;
    }
}
var John = {
    fullName: 'John Smith',
    mass: 90,
    height: 2.0,
    calcBMI: function() {
        this.BMI = this.mass / (this.height * this.height); 
        return this.BMI;
    }
}

Mark.calcBMI();
John.calcBMI();

if (Mark.BMI > John.BMI) {
    console.log (Mark.fullName + ' has a higher BMI than John, at ' + Mark.BMI);
} else if (Mark.BMI < John.BMI) {
    console.log (John.fullName + ' has a higher BMI than Mark, at ' + John.BMI);
} else if (Mark.BMI === John.BMI) {
    console.log (Mark.fullName + ' and ' + John.fullName + ' have the same BMI, at ' + Mark.BMI);
}


// Objects and methods
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        return 2020 - this.birthYear;
    }
};

console.log(john.calcAge());


// Objects and Properties

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);



// Coding Challenge 3

function tipCalculator(amount) {
    if(amount < 50) {
        return (amount*.20);
    } else if (amount <= 200 && amount >= 50) {
        return (amount*.15);
    } else if (amount > 200) {
        return (amount*.10);
    } else {
        return ('Error')
    }
}

var billAmounts = [124, 48, 268];
var finalAmounts = [];

billAmounts.forEach(element => {
    finalAmounts.push(element+(tipCalculator(element)));
});

console.log(finalAmounts);



// Arrays

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

names[names.length] = 'Mary';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);
john.shift();
console.log(john);

console.log(john.indexOf(1991));


// Function Statements and Expressions

var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives and uber around town.';
        case 'designer':
            return firstName + ' is a web designer for a company.';
        default:
            return firstName + ' is living his best life.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));




// Functions

function calculateAge(birthYear) {
    var result = 2020 - birthYear;
    console.log(result);
    return result;
}

calculateAge(1993);
calculateAge(1948);
calculateAge(1969);



var team1name = "John's Team"
var team2name = "Mark's Team"
var team1scores = [89, 120, 103, 200];
var team2scores = [116, 94, 123, 2];

var team1average = 0, team2average = 0
team1scores.forEach(element => {
    team1average += element;
});
team2scores.forEach(element => {
    team2average += element;
});
team1average /= (team1scores.length ++);
team2average /= (team2scores.length ++);

console.log(team1name + ' averaged ' + team1average + '.');
console.log(team2name + ' averaged ' + team2average + '.');

switch (true) {
    case team1average > team2average:
        console.log('The winner is ' + team1name + ' with a ' + team1average + ' point average,');
        break;
    case team2average > team1average:
        console.log('The winner is ' + team2name + ' with a ' + team2average + ' point average,');
        break;
    case team1average === team2average:
        console.log('There has been a draw, with both teams scoring a ' + team1average + ' point average,');
        break;
    default:
        console.log('Something went wrong. Check the incoming data.');
}



// Switch statement

var firstName = 'John';
var job = 'manager';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    default:
        console.log(firstName + ' does something else.');

}

var markHeight, johnHeight, markWeight, johnWeight;

markHeight = 1.80;
johnHeight = 1.95;
markWeight = 95;
johnWeight = 120;

var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's");
} else {
    console.log("John's BMI is higher than Mark's");
}
*/
