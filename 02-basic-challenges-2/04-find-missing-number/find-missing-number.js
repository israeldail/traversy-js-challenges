function findMissingNumber(nums) {
    let missingNum;

    for(let i = 1; i <= nums.length; i++) {
        if(!nums.includes(i)){
            missingNum = i;
        }
    }

    return missingNum;
}

module.exports = findMissingNumber;
