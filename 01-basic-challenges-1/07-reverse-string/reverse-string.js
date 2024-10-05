function reverseString(string) {
    let reversed = '';

    // i equal to last item in array
    // i greater than or equal to 0
    // if true, remove 1 from i until no longer true
    for(let i = string.length - 1; i >= 0; i--){
        reversed += string[i]
    }
    return reversed;
}

module.exports = reverseString;
