module.exports = function check(str, bracketsConfig) {
    const bracketsArr = bracketsConfig.map(item => item.join(''));
    const bracketsLength = bracketsArr.length;

    for(let i = 0; i < bracketsLength;){
        let currentBrackets = bracketsArr[i];

        if(str.indexOf(currentBrackets) !== -1){
            str = str.replace(currentBrackets, '');
            i = 0
        } else {
            i++
        }

    }

    return str === '' ? true : false;
};
