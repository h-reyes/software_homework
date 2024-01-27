// #1. What are all the JavaScript Data Types?
// There are seven fundamental data types: String, number, bigint(big integers), Boolean, Symbol, null, and undefined.
// There are more complex data types: Object, Array, Function.

//#2 What is the Difference Between Const Let and Var? Consider Scope ... Give an example
// Var: Function-scoped variable declaration.
// Let: Block-scoped variable declaration, not hoisted.
// Const: Block-scoped variable declaration, not hoisted, cannot be reassigned.
// Example:
function example() {
    var varVariable = 'var variable';
    let letVariable = 'let variable';
    const constVariable = 'const variable';

    console.log(varVariable); // Output: var variable
    console.log(letVariable); // Output: let variable
    console.log(constVariable); // Output: const variable
   }

   example();
   console.log(varVariable); // Output: var variable
   console.log(letVariable); // Error: letVariable is not defined
   console.log(constVariable); // Error: constVariable is not defined

// #3 Pass By Value vs Pass By Reference? Why would you say a String is pass by value/ or a value type? Why is an object a reference type?
// In JavaScript, primitive types (like String and Number) are passed by value, and reference types (like Object and Array) are passed by reference.

let value = 10;
let value2 = value;
value2 = 20;
console.log(value); // Output: 10
console.log(value2); // Output: 20

let obj = { a: 10 };
let obj2 = obj;
obj2.a = 20;
console.log(obj.a); // Output: 20
console.log(obj2.a); // Output: 20

// In the first example, value and value2 are different variables with their own values. However, in the second example, obj and obj2 reference the same object. Therefore, changing the value of a property in obj2 also changes the value of the same property in obj.

// #4 What do Map , Filter and Reduce do? Do they mutate the array you call them on?

// Map, Filter, and Reduce are higher-order functions that can be applied to arrays in JavaScript.

// Map: It creates a new array with the results of calling a provided function on every element in the array. It does not mutate the original array.

// Filter: It creates a new array with all elements that pass the test implemented by the provided function. It does not mutate the original array.

// Reduce: It reduces the array to a single value, which is the accumulated result of calling a provided function for each element in the array. It does not mutate the original array.
// Example:
let array = [1, 2, 3, 4];
let doubledArray = array.map(value => value * 2); // Output: [2, 4, 6, 8]
let evenArray = array.filter(value => value % 2 === 0);
// #5 What are all the Falsey Values in JS? Why do you think this is important to know?

// Falsey Values in JS: undefined, null, zero (0) 4.N(Not-a-Number) empty string ('')

// These values are considered false when used in a boolean context, such as in an if statement or a logical operation. All other values are truthy.

// It's important to know about falsey values in JavaScript because they can lead to unexpected results if not handled properly. For example, if you check if a variable is truthy or falsey, you can avoid having to check for specific values.

// #6 What is Async and Await?
// async and await are keywords in JavaScript that allow you to write asynchronous code that looks and behaves more like synchronous code. They are used with Promises to simplify asynchronous programming and make it easier to read and reason about.

// An async function returns a Promise, which resolves to the value returned by the function or rejects with an error. The await keyword is used inside an async function to pause the execution of the function until a Promise is resolved or rejected.

// Here's an example of using async and await to fetch data from an API:

async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();

// #7 What is an async function?

// An async function is a special kind of function in JavaScript that is designed to work with asynchronous operations, such as network requests or file operations. It is important to note that the async keyword itself does not make the function run asynchronously; it just allows the function to contain await expressions, which is a way to work with promises more conveniently.

// The syntax for defining an async function is as follows:

async function functionName(parameters) {
 // function body
}
// The await keyword can only be used inside an async function. When it encounters an await expression, the async function will pause its execution until the awaited promise is resolved or rejected. The value of the resolved promise will be used as the result of the await expression.

// Here is an example of using async and await:

async function fetchData() {
 try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
 } catch (error) {
    console.error('Error fetching data:', error);
 }
}

fetchData();
// In this example, the fetchData function is defined as an async function. It uses the await keyword to wait for the promises returned by fetch and response.json() to resolve. The function logs the fetched data to the console or an error message if there was an issue fetching the data.

// #8 What is try and catch?

// In JavaScript, try and catch are keywords used to handle exceptions or errors that occur during the execution of a block of code. The try block contains the code that might throw an exception, and the catch block contains the code that will be executed if an exception is thrown.

// The try block contains the code that might throw an exception. If an exception is thrown, the execution of the try block is immediately stopped, and the catch block is executed with the exception object as its argument. The catch block can then handle the exception and perform any necessary cleanup or error reporting.

// Here is an example of using try and catch to handle an exception:

try {
  const value = undefined;
  const result = value.toUpperCase();
} catch (error) {
  console.error('An error occurred:', error.message);
}
// In this example, the try block attempts to call the toUpperCase method on an undefined value, which will throw a TypeError exception. The catch block then logs an error message to the console.

// It is important to note that try and catch can only handle synchronous exceptions. For asynchronous exceptions, you should use try and catch in combination with promises or async/await.