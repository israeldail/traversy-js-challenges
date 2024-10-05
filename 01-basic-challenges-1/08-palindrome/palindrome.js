function isPalindrome(string) {
    let reversed = '';

    for(let i = string.length - 1; i >= 0; i--){
        reversed += string[i]
    }

    return string.toLowerCase().replace(/[^a-z0-9]/g, '') === reversed.toLowerCase().replace(/[^a-z0-9]/g, '') ? true : false;
}

module.exports = isPalindrome;
