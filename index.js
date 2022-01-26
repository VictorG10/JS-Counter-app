
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

