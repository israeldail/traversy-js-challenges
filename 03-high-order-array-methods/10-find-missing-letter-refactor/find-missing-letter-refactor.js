function findMissingLetter(arr) {
    // char code for first letter
    let start = arr[0].charCodeAt(0);
    // variable for missing character code
    const missingCharCode = arr
        .map((char) => char.charCodeAt(0)) // get the character code for each letter
        .find((current) => {
            // if the current code subtracted from the start code is greater than one return true
            if(current - start > 1) {
                return true;
            }
            // if not make the start code the current code until the result is greater than one
            start = current;
            return false;
        });

    return missingCharCode ? String.fromCharCode(missingCharCode - 1) : ''; 
}

module.exports = findMissingLetter;
