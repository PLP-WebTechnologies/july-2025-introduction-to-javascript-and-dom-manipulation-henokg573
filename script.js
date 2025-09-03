// ==========================
// Part 1: Variables & Conditionals
// ==========================
document.getElementById("checkAgeBtn").addEventListener("click", function() {
    let age = parseInt(document.getElementById("ageInput").value);

    // Conditional check
    if (age >= 18) {
        document.getElementById("ageResult").textContent = "You are an adult ✅";
    } else if (age > 0) {
        document.getElementById("ageResult").textContent = "You are a minor ⛔";
    } else {
        document.getElementById("ageResult").textContent = "Please enter a valid age!";
    }
});

// ==========================
// Part 2: Functions
// ==========================
// Function 1: Add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function 2: Format a string
function greetUser(name) {
    return `Hello, ${name}! Welcome to JS learning.`;
}

// Event listener for adding numbers
document.getElementById("addBtn").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let sum = addNumbers(num1, num2);
    document.getElementById("sumResult").textContent = `Sum: ${sum}`;
});

// ==========================
// Part 3: Loops
// ==========================
document.getElementById("loopBtn").addEventListener("click", function() {
    const ul = document.getElementById("loopResult");
    ul.innerHTML = ""; // Clear previous list

    // For loop example
    for (let i = 1; i <= 5; i++) {
        let li = document.createElement("li");
        li.textContent = `Number ${i}`;
        ul.appendChild(li);
    }

    // While loop example
    let j = 1;
    while (j <= 5) {
        console.log(`While loop number: ${j}`);
        j++;
    }
});

// ==========================
// Part 4: DOM Manipulation
// ==========================
// 1. Toggle class
document.getElementById("toggleBtn").addEventListener("click", function() {
    document.getElementById("domText").classList.toggle("highlight");
});

// 2. Create and add a new list item
document.getElementById("addItemBtn").addEventListener("click", function() {
    let li = document.createElement("li");
    li.textContent = "New list item";
    document.getElementById("domList").appendChild(li);
});

// 3. Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("changeTextPara").textContent = "Text has been changed dynamically! 🎉";
});
