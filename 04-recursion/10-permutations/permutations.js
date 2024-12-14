function permutations(str) {
  const result = [];
  // base case 
  if (str.length === 0) {
    result.push('');
    return result;
  }
  // iterate over string 
  // get first letter 
  // get rest of string 
  // get subPermutations 
  // iterate over subPermutations
  // push result to array
  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];
    const restOfString = str.slice(0, i) + str.slice(i + 1);
    const subPermutations = permutations(restOfString);

    for (let j = 0; j < subPermutations.length; j++) {
      result.push(firstChar + subPermutations[j]);
    }
  }

  return result;
 
}

module.exports = permutations;
