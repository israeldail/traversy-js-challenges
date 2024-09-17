function findMaxNumber(array) {
    let temp;
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] < array[j]){
                temp = array[j];
            }else if(array[i] === array[j]){
                temp = array[i];
            }
        }
    }

    return temp;
}

module.exports = findMaxNumber;
