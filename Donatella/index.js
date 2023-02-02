/* // Basic

//ex1
let temp = Math.floor(Math.random() * 25) - 5;

if (temp >= -5 && temp <= 10) {
    console.log("The weather is cold");
} else {
    console.log("The weather is moderate");
}

console.log(temp);


//ex2

let random = Math.floor(Math.random() * 4);
let favoriteFoods = ['pizza', 'hamburger', 'ice cream', 'chocolate'];
console.log("My favorite food is " + favoriteFoods[random]);



function randomFood() {
    let favoriteFoods2 = ['pizza', 'hamburger', 'ice cream', 'chocolate'];
    let randomFood = Math.floor(Math.random() * 4);
    console.log(`My fave food is ${favoriteFoods2[randomFood]}`);
}

randomFood();


function randomFood() {
    let favoriteFoods2 = ['pizza', 'hamburger', 'ice cream', 'chocolate'];
    let randomFood = Math.floor(Math.random() * 4);
    return `My fave food is ${favoriteFoods2[randomFood]}`
}
console.log(randomFood());


//exercise3
// with console.log
function crystalGazer(childrenNumber, partnerName, location, jobTitle) {
    console.log(`You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${childrenNumber} child.`);
}
crystalGazer(1, "Ryan", "London", "Professor");

// return
function crystalGazer2(childrenNumber, partnerName, location, jobTitle) {
    return `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${childrenNumber} child.`;
}
console.log(crystalGazer(1, "Ryan", "London", "Professor"));

//exercise4
function ageCalculator(birthYear, currentYear) {
    return currentYear - birthYear;
}
console.log(ageCalculator(1994, 2023));

//exercise5


function ageCalculator2() {
    // let birthYear = prompt("Please, type your birth year"); //adds a prompt for the user to type their birthyear
    let tody = new Date();
    let currYear = tody.getFullYear();
    return `You are either ${currYear - birthYear} or ${currYear - birthYear -1}`;
}
console.log(ageCalculator2()); */

//exercise6
function degToRad(degrees) {
    let pi = Math.PI;
    let radiant = degrees * (pi / 180);
    return radiant;
}
console.log(degToRad(90));

/* function degToRad1() {
    let degrees = prompt("Please type in a value in degrees");
    let pi = Math.PI;
    let radiant = degrees * (pi / 180);
    return radiant;
}
console.log(degToRad1()); */

//exercise7 Returning Multiple Values from inside a Function
function calc(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;
    let result = [area, volume];
    return result;
}
console.log(calc(2, 7)[0]); //outputs area
console.log(calc(7, 5, 2)[1]); //outputs volume


//Intermediate charAt and toUpperCase
const cap = (function() {
    let text = 'i am a web developer'.charAt(0).toUpperCase(0);
    return `${text} am a web developer`;
}());
console.log(cap);

//Intermediate average Grade

function marks(math, physics, english) {
    let sum = math + physics + english;
    let average = sum / 3;
    let grades = [sum, average];
    return grades;
}
console.log(marks(3, 4, 5)[0]);
console.log(marks(3, 4, 5)[1]);

//Advances

function timeConverter() {


    let input = prompt("Please type in a value in minutes");
    let hours = input / 60; //200/60=3.33
    let restHours = Math.floor(hours);
    let minutes = Math.round((hours - restHours) * 60);

    return `${input} minutes = ${restHours} hour(s) and ${minutes} minute(s).`
}
console.log(timeConverter());