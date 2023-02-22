export function oddOrEven(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++)
        sum += array[i];
    if (sum % 2)
        return "odd";
    else
        return "even";
}
