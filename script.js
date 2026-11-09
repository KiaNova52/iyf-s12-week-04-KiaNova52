// DOM manipulation

let heading = document.getElementById("heading");
let message = document.getElementById("message");
let button = document.getElementById("changeButton");

button.addEventListener("click", function () {
    heading.textContent = "Welcome, Kelvin!";
    message.textContent = "My JavaScript project is working!";
});
// Simple Calculator

let calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", function () {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let total = num1 + num2;

    document.getElementById("result").textContent = "Result: " + total;
});
// Additional calculator operations

let firstNumber = document.getElementById("num1");
let secondNumber = document.getElementById("num2");
let result = document.getElementById("result");

document.getElementById("subtractButton").addEventListener("click", function () {
    result.textContent = "Result: " + (Number(firstNumber.value) - Number(secondNumber.value));
});

document.getElementById("multiplyButton").addEventListener("click", function () {
    result.textContent = "Result: " + (Number(firstNumber.value) * Number(secondNumber.value));
});

document.getElementById("divideButton").addEventListener("click", function () {
    let a = Number(firstNumber.value);
    let b = Number(secondNumber.value);

    if (b === 0) {
        result.textContent = "Cannot divide by zero!";
    } else {
        result.textContent = "Result: " + (a / b);
    }
});
// Student Grade Tracker

let gradeButton = document.getElementById("gradeButton");

gradeButton.addEventListener("click", function () {
    let name = document.getElementById("studentName").value;
    let marks = Number(document.getElementById("studentMarks").value);

    let grade;

    if (name.trim() === "") {
        document.getElementById("gradeResult").textContent =
            "Please enter the student name.";
        return;
    }

    if (marks < 0 || marks > 100 || document.getElementById("studentMarks").value === "") {
        document.getElementById("gradeResult").textContent =
            "Please enter marks between 0 and 100.";
        return;
    }

    if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 60) {
        grade = "C";
    } else if (marks >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById("gradeResult").textContent =
        name + " scored " + marks + " marks. Grade: " + grade;
});