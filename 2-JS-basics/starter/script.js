
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


/*
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
