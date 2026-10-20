const Scanner = require("./lexer/Scanner");

const scanner = new Scanner("Jack");

console.log(scanner.tokenize());