function countOccurrences(string, char) {
    let count = 0;
    for(let letter of string){
        if(char === letter){
            count++;
        }
    }

    return count;
}

module.exports = countOccurrences;
