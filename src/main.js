const Scanner = require("./lexer/Scanner");

const scanner = new Scanner("let x = 25;");

console.log(scanner.tokenize());