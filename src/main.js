const Scanner = require("./lexer/Scanner");
const scanner = new Scanner("/* Meu comentario");

console.log(scanner.tokenize());