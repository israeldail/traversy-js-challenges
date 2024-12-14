function sumUpTo(n, total = 0) {
if (n === 0) return total
return sumUpTo(n - 1, total + n)
}
module.exports = sumUpTo;
