const Scanner = require("./lexer/Scanner");

const scanner = new Scanner("/* Meu comentario */\nlet x = 10;");

console.log(scanner.tokenize());