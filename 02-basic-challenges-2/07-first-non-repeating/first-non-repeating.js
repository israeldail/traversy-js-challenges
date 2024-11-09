function findFirstNonRepeatingCharacter(str) {
    const charCount = {};

    for(const char of str) {
        // if it has a value add 1, if not add 1 starting from 0
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // another loop to match the string characters against
    // the completed object from our previous loop.
    for(const char of str) {
        // first object key to equal one gets returned
        if(charCount[char] === 1){
            return char;
        }
    }

    return null;
}

module.exports = findFirstNonRepeatingCharacter;
