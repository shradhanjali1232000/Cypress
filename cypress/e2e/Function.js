// A basic JavaScript program: Print even numbers from 1 to 10

// Function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Loop from 1 to 10
for (let i = 1; i <= 10; i++) {
    if (isEven(i)) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

// Function to greet a user
function greet(name) {
    console.log("Hello, " + name + "! Welcome to JavaScript.");
}

// Call the greet function
greet("Shradhanjali");
