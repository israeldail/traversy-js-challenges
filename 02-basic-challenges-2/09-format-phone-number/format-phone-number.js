function formatPhoneNumber(phoneNum) {
    const firstThree = Array.from(phoneNum.slice(0,3))
    const secondThree = Array.from(phoneNum.slice(3,6))
    const lastFour = Array.from(phoneNum.slice(-4))
    return `(${firstThree.join('')}) ${secondThree.join('')}-${lastFour.join('')}`
}

module.exports = formatPhoneNumber;
