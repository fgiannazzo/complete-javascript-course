// Function constructor

var Person = function (name, yearOfBith, job) {
    this.name = name;
    this.yearOfBirth = yearOfBith;
    this.job = job;
}

Person.prototype.calculateAge = 
function() {
    console.log(2020 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

