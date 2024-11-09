function sumOfEvenSquares(arr) {
    return arr
    .filter((item) => item % 2 === 0)
    .map((item) => item ** 2)
    .reduce((current, acc) => current+ acc, 0)
}

module.exports = sumOfEvenSquares;
