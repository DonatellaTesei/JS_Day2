// Exercise 1 //
/*
let temp = Math.floor(Math.random() * 25 - 5);
if (temp >= -5 && temp <= 10) {
    console.log("The Weather is Cold");
} else {
    console.log("The Weather is Moderate");
}

console.log(temp);
*/

// Exercise 2 //
// First Solution without Function //

/*
const favoriteFood = ["pizza", "hamburger", "ice cream", "chocolate"];
let random = Math.floor(Math.random() * 4);
console.log(favoriteFood[random]);
*/

// New Solution //
/*
function randomFood() {
    let favoriteFood2 = ["pizza", "hamburger", "ice cream", "chocolate"];
    let randFood = Math.floor(Math.random() * 4);
    console.log(favoriteFood2[randFood]);
}
randomFood();
*/

// Exercise 3 //
/*
function crystalGazer(number_children, partners_name, geographic_location, job_title) {
    return `You will be a ${job_title} in ${geographic_location} and married to ${partners_name} with ${number_children} children.`;
}
console.log(crystalGazer(8, "Taner", "Thailand", "Yoga Instuctor"));
*/

// Exercise 4 //
/*
function ageCalculator(currentYear, birthYear) {
    return currentYear - birthYear;
}
console.log(ageCalculator(2023, 1990));
*/

// Exeercise 5 //
/*
function ageCalculator2() {
    let birthYear = prompt("Please type in your Birthyear");
    let n = new Date().getFullYear();
    return "you are either " + (n - birthYear) + " or " + (n - birthYear - 1);
}
console.log(ageCalculator2());
*/

// Exercise 6 //
/*
function convert() {
    let degrees = prompt("Please type in a Degree");
    let pi = Math.PI;
    let radiant = degrees * (pi / 180);
    return radiant;
}
console.log(convert());
*/

// Exercise 7 //
/*
function calc(width, height, depth) {
    let area = width * height;
    let vol = width * height * depth;

    let result = [area, vol];
    return result;

}
console.log(calc(7, 2)[0]);
console.log(calc(7, 5, 2)[1]);
*/

// Intermediate //
/*
const cap = (function() {
    let text = 'i am a web developer'.charAt(0).toUpperCase(0);
    return `${text} am a web developer`;
}())
console.log(cap);
*/

// Average Grade //
/*
function classes(math, physics, english) {
    let sum = math + physics + english;
    let average = sum / 3;
    let grades = [sum, average];
    return grades;
}
console.log(classes(3, 4, 5)[0]);
console.log(classes(3, 4, 5)[1]);
*/

// Challenge //