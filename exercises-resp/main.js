// main.js
var greetings = require("./greetings.js");

// "Hello"
console.log(greetings.sayHelloInEnglish());

// "Hola"
console.log(greetings.sayHelloInSpanish());


console.log(greetings.getFileNames(process.argv[1],process.argv[2]));
