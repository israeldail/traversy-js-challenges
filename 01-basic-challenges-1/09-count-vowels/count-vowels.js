function countVowels(str) {
    let vowels = ['a','e','i','o','u'];
    let count = 0;

    for(let i = 0; i < str.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(str.toLowerCase()[i] === vowels[j]){
                count++;
            }
        }
    }

    return count;
}

module.exports = countVowels;
