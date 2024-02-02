// type node in the terminal to code javaScript in the terminal

// lesson 1: type node script in the terminal to run this segment of code
// const multiply = (a,b)  => a * b; 

// let n = multiply(5,8);

// console.log(n)

// lesson2: Writes "Hello into a file" type node script to run

// fs is an object
const fs = require('fs'); 
console.log(typeof fs);

fs.writeFile('./hello.txt', 'Hello', function(){
    console.log('done creating file');
});

let daysOfWeek = require('./days-of-week');
let day = daysOfWeek.getWeekday(6);
console.log(day);

// what are modules used for in Node?

// extending functionality of the JS Application

// How many modules can be defined in a single file?

// Each file is one module

// What is the special object we use in our module to attach or assign functionality to?

// The special object  that we use in our module to attach or assign functionality to is called `module.exports`.

// How many times can we require a module in our program?

// Any number of times 

const request = require('request');
request("http://jsonplaceholder.typicode.com/users", function(err, res, body){
    console.log(body);
});