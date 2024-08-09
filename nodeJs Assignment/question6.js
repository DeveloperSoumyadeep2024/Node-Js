// Import the 'readline' module for reading input from the command line
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to perform the calculation
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num2 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'Invalid operator';
  }
}

// Function to prompt the user for input
function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// Main function to run the calculator
async function main() {
  const num1 = parseFloat(await askQuestion('Enter the first number: '));
  const num2 = parseFloat(await askQuestion('Enter the second number: '));
  const operator = await askQuestion('Enter the operator (+, -, *, /): ');

  const result = calculate(num1, num2, operator);

  console.log(`The result is: ${result}`);

  rl.close();
}

// Run the calculator
main();
