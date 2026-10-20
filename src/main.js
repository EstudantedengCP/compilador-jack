const Scanner = require("./lexer/Scanner");

const scanner = new Scanner("let x = 10;");

console.log(scanner.tokenize());