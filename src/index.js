module.exports = function reverse (n) {
    let numStr = n + '',
    result = '';
    if (numStr.slice(0, 1) == "-") {
        let minus = numStr.slice(1, numStr.length);
        for (let i = minus.length; i > 0; i--) {
            result += minus.slice((i-1), i);
        }
    } else {
        for (let i = numStr.length; i > 0; i--) {
            result += numStr.slice((i-1), i);
        }
    }
    return +result;
};