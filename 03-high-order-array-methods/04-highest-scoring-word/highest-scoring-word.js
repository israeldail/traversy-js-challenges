function highestScoringWord(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const wordsWithScores = {};
    // TODO: Use the split method to turn the string into an array, use split(" ") to separate whole words
    const wordArr = string.split(" ");
    // TODO: Use the map method to calculate score for each word. Might have to google a part of this.
    const wordScores = wordArr.map((word) => {
        let sum = 0;
        for(letter of word) {
            let alphabetIndex = alphabet.indexOf(letter) + 1;
            sum += alphabetIndex;
            wordsWithScores[word] = sum;
        }
    });
    // TODO: Use reduce method to find word with highest score and return that.
    const highestScoreWord = Object.keys(wordsWithScores).reduce((maxWord, key) => {
        return wordsWithScores[key] > wordsWithScores[maxWord] ? key : maxWord;
    }, Object.keys(wordsWithScores)[0]);

    return highestScoreWord;
}

module.exports = highestScoringWord;
