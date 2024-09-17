function calculator(a,b,operand) {
    if(operand === "+"){
        return a+b;
    }else if(operand === "-"){
        return a-b;
    }else if(operand === "*"){
        return a*b;
    }else if(operand === "/"){
        return a/b;
    }
}

module.exports = calculator;
