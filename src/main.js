const Scanner = require("./lexer/Scanner");

const scanner = new Scanner("let x = 10;");

scanner.tokenize();