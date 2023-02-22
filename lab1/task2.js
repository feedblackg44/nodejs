export function binaryArrayToNumber (array) {
    let output = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i])
            output += Math.pow(2, array.length - 1 - i);
    }
    return output;
}