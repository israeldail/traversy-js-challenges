function validAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false; // Check lengths first
    // counting the occurrence of each letter
    const str1Count = str1.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
      }, {});
    
      const str2Count = str2.split('').reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
      }, {});

    return Object.keys(str1Count).every(
        (char) => str1Count[char] === str2Count[char]
      );
}

module.exports = validAnagrams;
