const Scanner = require("./lexer/Scanner");

const scanner = new Scanner("Jack");

console.log(scanner.isAtEnd());

scanner.advance();
scanner.advance();
scanner.advance();
scanner.advance();

console.log("Posição:", scanner.position);
console.log("Tamanho:", scanner.source.length);

console.log("Terminou?", scanner.isAtEnd());