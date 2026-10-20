const SYMBOLS = new Set([
    "{", "}", "(", ")", "[", "]",
    ".", ",", ";", "+", "-", "*", "/",
    "&", "|", "<", ">", "=", "~"
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
}


module.exports = Scanner;