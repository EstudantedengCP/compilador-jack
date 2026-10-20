const Scanner = require("./lexer/Scanner");

const scanner = new Scanner("Jack");

console.log(scanner.peek());
console.log(scanner.advance());
console.log(scanner.peek());

console.log("Posição:", scanner.position);
console.log("Linha:", scanner.line);
console.log("Coluna:", scanner.column);