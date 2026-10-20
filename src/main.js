const Scanner = require("./lexer/Scanner");

const scanner = new Scanner("let idade25 = 10;");

console.log(scanner.tokenize());