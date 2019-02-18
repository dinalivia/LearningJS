/*global console*/ /* eslint no-console: "off" */
/*eslint no-unused-vars: "error"*/


/**************************
* Variables and data types


console.log('New Hello World!!!');
var firstName = 'John';

var lastName = 'Wick';
var age = 25;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job='teacher';
console.log(job);

*/

/**************************
* Variables mutation and type coercion

var firstName = 'John';
var age = 25;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/


/**************************
* Basic operations


var now, yearJohn, yearMark;
now = 2019
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(now + 2);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// Typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

*/

/***********************
* Operator precendence


var now = 2019;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x)

//More operators
x *= 2;
console(log);
console(log);
x += 10;
console.log(x);
x += 1;
x++;

*/

/**********************
* CODING CHALLENGE 1
*/

/*
var markMass, markHeight, johnMass, johnHeight;

markMass = prompt("What's Mark´s mass?");
markHeight = prompt("What's Mark´s height?");
johnMass = prompt("What's John´s mass?");
johnHeight = prompt("What's John´s height?");

console.log( markMass, markHeight, johnMass, johnHeight);

markBMI = markMass/(markHeight*markHeight);
johnBMI = johnMass/(johnHeight*johnHeight);
                    
console.log ("Mark's BMI is " + markBMI + " and John's BMI is " + johnBMI );

if(markBMI > johnBMI){
    console.log("Mark's BMI is greater than John's");
}
else{
    console.log("John's BMI is greater than Mark's");
}

var markIsFinner = markBMI < johnBMI
console.log(markIsFinner);
*/

/******************************
* If / else statements
*/

/*
var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
    console.log(firstName + ' is married ');
} else {
    console.log(firstName + ' will hopefully never marry :)');
}

var isMarried = true;
if(isMarried){
    console.log(firstName + ' is married! ');
} else {
    console.log(firstName + ' will hopefully never marry ');
}
*/

/*****************************
* The Ternary Operator and Switch Statements
*/

/*
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//switch statement
var job = 'teacher';
switch (job){
    case 'teacher':
        console.log(firstName + ' teaches kids hoiw to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designes beatiful websites.');
        break;
    default:
        console.log(firstName + ' is unemployed')
}
*/

/************************** 
 * CODING CHALLENGE
*/

/*
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if(scoreJohn > scoreMike && scoreJohn > scoreMary){
    console.log('John\'s team wins with '+ scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary){
    console.log('Mike\'s team wins with '+ scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike){
    console.log('Mary\'s team wins with '+ scoreMary + ' points');
} else {
    console.log('There is a draw');
}

// if(scoreJohn > scoreMike){
//     console.log('John\'s team wins with '+ scoreJohn + ' points');
// } else if(scoreMike > scoreJohn){
//     console.log('Mike\'s team wins with '+ scoreMike + ' points');
// } else {
//     console.log('There is a draw');
// }

*/

/****************************
 * Functions
 */

 /*
function calculateAge(birthYear)
{
    var now = 2019;
    return age = now - birthYear;
}

var ageJohn = calculateAge(1998);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName)
{
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired ');

    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

*/

/**************************
 * Function Statements and expressions
 */

 /*
// Function declaration
//function whatDoYouDo(job, firstName);

 // Function expression
 var whatDoYouDo = function(job, firstName){
     switch(job){
         case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beatiful websites';
        default:
            return firstName + ' does something else';
        }
 }

 console.log(whatDoYouDo('teacher', 'John'));
 console.log(whatDoYouDo('designer', 'Jane'));
 console.log(whatDoYouDo('retired', 'Mark'));
*/

/*************************
 * Arrays
 */
/*
// Initializes new array
 var names = ['John', 'Mark', 'Jane'];
 var years = new Array(1999, 1969, 1948);

 console.log(names);
 console.log(names.length);

 // Change array data
 names[1] = 'Ben';
 names[names.length] = 'Mary';
 console.log(names);

 //Different data types
var john = ['John', 'Smith', 1990, 'Designer', false];

john.push('blue');
john.unshift('Mister');
console.log(john);

john.pop(); // deletes last item
john.shift() // deletes firts item
console.log(john);

console.log(john.indexOf(1990));


var isDesigner = john.indexOf('Designer')=== -1 ? 'John is NOT a designer': 'John IS a designer';
console.log(isDesigner);
*/

/************************
 *  CODING CHALLENGE
 */

var bills = [124, 48, 268];
var tips = [], finalBill = [];

function tipCalculator(billValue)
{
    var tipValue = 0;
    if(billValue < 50){
        tipValue = .2;
    } else if(billValue >= 50 && billValue < 200){
        tipValue = .15;
    } else {
        tipValue = .1;
    }
    return tipValue * billValue;
}
tips = [tipCalculator(bills[0]),
        tipCalculator(bills[1]),
        tipCalculator(bills[2])];

finalBill = [bills[0]+ tips[0],
            bills[1]+ tips[1],
            bills[2]+ tips[2]];

console.log(bills);
console.log('Johns Tips were: ' + tips);
console.log('Johns Final Bills were: ' + finalBill);







