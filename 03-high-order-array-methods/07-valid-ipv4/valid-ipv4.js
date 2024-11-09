const isValidIPv4 = (str) => {
    let sum = 0;
    for(octet in str.split(".")) {
        sum += 1;
    }
    return str.split(".").every((octet) => octet >= 0 && octet <= 255 && sum === 4 && !octet.startsWith(0) );
};

module.exports = isValidIPv4;
