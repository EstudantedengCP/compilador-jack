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
}


module.exports = Scanner;