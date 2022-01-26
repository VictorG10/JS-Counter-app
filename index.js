
// document.getElementById(count-el).innerText = 5
/*
let firstBatch = 5;
let secondBatch = 7;

let count = firstBatch + secondBatch;

console.log(count);


let myAge = window.prompt("what is your age??");

let humanDogRatio = 7;

let myDogAge = myAge * humanDogRatio;

console.log(myDogAge);


let bonusPoint = 50;

bonusPoint = 100;

bonusPoint = bonusPoint - 75;

bonusPoint = bonusPoint + 45;

console.log(bonusPoint);


function increment () {
    console.log("The button was clicked")
}

function countdown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}

countdown();


function vg() {
    console.log(42);
}

vg();


let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function logLapTime() {
    let totalTime =lap1 + lap2 + lap3;
    console.log(totalTime);
}

logLapTime();


let lapsCompleted = 0;

function incrementLap() {
    lapsCompleted = lapsCompleted + 1;
}

incrementLap();
incrementLap();
incrementLap();

console.log(lapsCompleted);


let username = "per";

console.log(username);

let message = "You have three new notifications";

console.log(message);

console.log(message + ", " + username + "!");

let messageToUser = message + ", " + username + "!";

console.log(messageToUser);

let name = window.prompt("Enter Your Name!");

let greeting = "Hi, my name is leo messi"

let myGreeting = name + " " + greeting;

console.log(myGreeting);
*/

// Inccrement 
let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

function increment() {
    //console.log("clicked");
    count += 1;
    
    countEl.textContent = count;
    console.log(count);
}

// Save
let saveEl = document.getElementById("save-el");

console.log(saveEl)

function save () {
    let countStr = count + " - " ;
    saveEl.textContent += countStr;
    console.log(count);
    countEl.textContent = 0;
    count = 0;
}

