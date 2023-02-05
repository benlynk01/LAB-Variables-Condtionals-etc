/* TASK 1A */ 
let userNumber = document.querySelector("#task1A");
let userAmount = prompt("Enter a number: ");
userNumber.innerHTML = `Quantity ${userAmount}`;

/* TASK 1B */
let userPercent = document.querySelector("#task1B");
let percent = prompt("Enter a percentage: ");
percent = parseFloat(percent);
let calcPercent = (percent * 0.01) * userAmount;
userPercent.innerHTML = ("Quantity of " + userAmount + " at " + percent + "%" + " is, " + calcPercent);

/* TASK 2A */
let points = prompt("Enter the exam score: ");
let totPoints = document.querySelector("#task2A");
points = parseInt(points);
let str_a = "";
if (points > 90){
    str_a = "A";
}else if(points > 80){
    str_a = "B";
}else if(points > 70){
    str_a = "C";
}else if(points > 60){
    str_a = "D";
}else{
    str_a = "F";
}
totPoints.innerHTML = ("Your grade is: " + str_a);

/* TASK 2B */
let grade = prompt("Enter your exam score (1-100):");
let userGrade = document.querySelector("#task2B");

grade = parseInt(grade);

let letterGrade;
switch (true) {
  case grade >= 91 && grade <= 100:
    letterGrade = "A";
    break;
  case grade >= 81 && grade <= 90:
    letterGrade = "B";
    break;
  case grade >= 71 && grade <= 80:
    letterGrade = "C";
    break;
  case grade >= 61 && grade <= 70:
    letterGrade = "D";
    break;
  default:
    letterGrade = "F";
}

userGrade.innerHTML = (`(Task B) Your letter grade is: ${letterGrade}`);

/* TASK 3 */
let lineToWrite = prompt("What is the line? ");
let numberOfLines = prompt("How many lines? ");

numberOfLines = parseInt(numberOfLines);

for(let line = 1; line <= numberOfLines; line++){
    console.log(`${line} ${lineToWrite}`);
}

/* TASK 4 */
let userLine = document.querySelector("#task4");
let lineToWrite4 = prompt("What is the line? ");
let numberOfLines4 = parseInt(prompt("How many lines? "));
let line4 = 1;

while (line4 <= numberOfLines4) {
    userLine.innerHTML += `${line4} ${lineToWrite4} <br>`;
    line4++;
}

/* TASK 5 */
const lineWriter = () =>{
    let userLine = document.querySelector("#task5");
    let lineToWrite5 = prompt("What is the line? ");
    let numberOfLines5 = parseInt(prompt("How many lines? "));
    let line5 = 1;
    
    while (line5 <= numberOfLines5) {
        userLine.innerHTML += `${line5} ${lineToWrite5} <br>`;
        line5++;
    } 
}

userLine = lineWriter();

/* TASK 6A */
let container = document.createElement("div");
container.id = "times-tables-container";

let table = document.createElement("table");
for (let factor1 = 1; factor1 <= 12; factor1++) {
    let row = document.createElement("tr");
    for (let factor2 = 1; factor2 <= 12; factor2++) {
        let cell = document.createElement("td");
        let result = factor1 * factor2;
        cell.textContent = `${factor1} x ${factor2} = ${result}`;
        row.appendChild(cell);
    }
    table.appendChild(row);
}

container.appendChild(table);
document.body.appendChild(container);

/* TASK 6B */
function createTables(factor1) {
    let container = document.createElement("div");
    container.id = `times-tables-container-${factor1}`;

    let table = document.createElement("table");
    for (let factor2 = 1; factor2 <= 12; factor2++) {
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        let result = factor1 * factor2;
        cell.textContent = `${factor1} x ${factor2} = ${result}`;
        row.appendChild(cell);
        table.appendChild(row);
    }

    container.appendChild(table);
    document.body.appendChild(container);
}

for (let factor1 = 1; factor1 <= 12; factor1++) {
    createTables(factor1);
}

/* TASK 6C */
function createTable(factor, delimiter) {
    let container = document.createElement("div");
    container.id = `times-tables-container-${factor}`;

    let table = document.createElement("table");
    for (let i = 1; i <= delimiter; i++) {
        let row = document.createElement("tr");
        let cell = document.createElement("td");
        let result = factor * i;
        cell.textContent = `${factor} x ${i} = ${result}`;
        row.appendChild(cell);
        table.appendChild(row);
    }

    container.appendChild(table);
    document.body.appendChild(container);
}

const allTables = (delimiter) => {
    for (let factor = 1; factor <= delimiter; factor++) {
        createTable(factor, delimiter);
    }
};

allTables(10);

/* TASK 7 */

// Hoisting is a behavior in JavaScript where variables and functions are moved to the top of their respective scopes, which allows them to be used before the function has been declared.

// Example:

hoistedFunction(); // outputs "This is a hoisted function."

function hoistedFunction() {
    console.log("This is a hoisted function");
}

// Example of variable hoisting:

console.log(hoistedVariable); // outputs undefined
var hoistedVariable = "This is a hoisted variable.";

// In ECMA standards, hoisting is resolved by specifying that variables declared with the `var` keyword are hoisted to the top of their respective scopes and are assigned the value `undefined` until their actual value is assigned. Functions declared with the `function` keyword are also hoisted to the top of their respective scopes, with their full implementation being available to call from anywhere in the scope.

// However, variables declared with `let` or `const` are not hoisted in the same way as variables declared with `var`. These variables are only accessible within the block in which they are declared and are not available before their declaration.