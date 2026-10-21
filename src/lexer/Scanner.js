const SYMBOLS = new Set([
    "{", "}", "(", ")", "[", "]",
    ".", ",", ";", "+", "-", "*", "/",
    "&", "|", "<", ">", "=", "~"
]);

const KEYWORDS = new Set([
    "class", "constructor", "function", "method",
    "field", "static", "var", "int", "char",
    "boolean", "void", "true", "false", "null",
    "this", "let", "do", "if", "else", "while",
    "return"
]);



class Scanner{
    constructor(source){
        this.source = source;
        this.tokens = [];
        this.start = 0;
        this.position = 0;
        this.line = 1;
        this.column = 1;
    }

    peek(){
        return this.source[this.position]
    }

    advance(){
        let char  = this.source[this.position]
        this.position++



        if(char === "\n"){
            this.line++
            this.column = 1

        }else{
            this.column++
        }
        return char
    }
    isAtEnd(){

        return this.position >= this.source.length

    }
   tokenize() {
    while (!this.isAtEnd()) {
        this.start = this.position;

        let char = this.advance();

        if (char === "/" && this.peek() === "/") {
            this.advance();
            this.skipLineComment();
            continue;
        }
        if(char === "/" && this.peek() === "*"){
            this.advance();
            this.skipBlockComment();
            continue;
        }

        if(this.isDigit(char)){
            this.readNumber()
        }

        console.log("Caractere:", char);

        if (SYMBOLS.has(char)) {
            console.log("Símbolo encontrado:", char);
            this.tokens.push({
        type: "symbol",
        value: char,
        line: this.line,
        column: this.column - 1
    })
        }
        if (this.isLetter(char)) {
        this.readIdentifier();

}
        if (char === '"') {
    this.readString();
}
      
    }

    return this.tokens;
}
isDigit(char) {
    return /[0-9]/.test(char);
}
readNumber() {
    while (!this.isAtEnd() && this.isDigit(this.peek())) {
        this.advance();
    }
    const number = this.source.slice(this.start, this.position);

   this.tokens.push({
    type: "integerConstant",
    value: number,
    line: this.line,
    column: this.column - number.length
});;
}
isLetter(char) {
    return /[a-zA-Z_]/.test(char);
}
isAlphaNumeric(char) {
    return this.isLetter(char) || this.isDigit(char);
}

readIdentifier() {
    while (!this.isAtEnd() && this.isAlphaNumeric(this.peek())) {
        this.advance();
    }
    const word = this.source.slice(this.start, this.position);
    const type = KEYWORDS.has(word) ? "keyword" : "identifier";

    this.tokens.push({
    type: type,
    value: word,
    line: this.line,
    column: this.column - word.length
});
}

readString() {
    while (!this.isAtEnd() && this.peek() !== '"' && this.peek() !== "\n") {
        this.advance();
    }
    if (this.isAtEnd() || this.peek() === "\n") {
    throw new Error("String não fechada");
}
    const value = this.source.slice(this.start + 1, this.position);
    this.advance();
    this.tokens.push({
    type: "stringConstant",
    value: value,
    line: this.line,
    column: this.column - value.length - 2
});
}

skipLineComment() {
    while (!this.isAtEnd() && this.peek() !== "\n") {
        this.advance();
    }
}

skipBlockComment(){
    while(!this.isAtEnd()){
        if(this.peek()=== "*" && this.source[this.position + 1]=== "/"){
            this.advance();
            this.advance();
            return
        }
        this.advance()
    }
    throw new Error("Comentário de bloco não fechado")
}


}


module.exports = Scanner;