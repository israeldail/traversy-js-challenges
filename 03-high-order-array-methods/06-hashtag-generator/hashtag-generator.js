function generateHashtag(str) {
    if(str.length > 140 || str.length === 0 || str === " ") return false;

    const modifiedStr = str.split(" ").map((word) => word.slice(0,1).toUpperCase() + word.slice(1)).join("").trim();
    return "#" + modifiedStr;
}

module.exports = generateHashtag;
