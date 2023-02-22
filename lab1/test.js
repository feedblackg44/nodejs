import assert from 'assert';
import {alphabetPosition} from "./task1.js";
import {binaryArrayToNumber} from "./task2.js";
import {oddOrEven} from "./task3.js";

it('task1', () => {
    assert.equal(alphabetPosition("The sunset sets at twelve o' clock."),
        "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
    assert.equal(alphabetPosition("The narwhal bacons at midnight."),
        "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");
})

it('task2', () => {
    assert.equal(binaryArrayToNumber([0,0,0,1]), 1);
    assert.equal(binaryArrayToNumber([0,0,1,0]), 2);
    assert.equal(binaryArrayToNumber([1,1,1,1]), 15);
    assert.equal(binaryArrayToNumber([0,1,1,0]), 6);
})

it('task3', () => {
    assert.strictEqual(oddOrEven([0]), 'even');
    assert.strictEqual(oddOrEven([1]), 'odd');
    assert.strictEqual(oddOrEven([]), 'even');

    assert.strictEqual(oddOrEven([0, 1, 5]), 'even');
    assert.strictEqual(oddOrEven([0, 1, 3]), 'even');
    assert.strictEqual(oddOrEven([1023, 1, 2]), 'even');

    assert.strictEqual(oddOrEven([0, -1, -5]), 'even');
    assert.strictEqual(oddOrEven([0, -1, -3]), 'even');
    assert.strictEqual(oddOrEven([-1023, 1, -2]), 'even');

    assert.strictEqual(oddOrEven([0, 1, 2]), 'odd');
    assert.strictEqual(oddOrEven([0, 1, 4]), 'odd');
    assert.strictEqual(oddOrEven([1023, 1, 3]), 'odd');

    assert.strictEqual(oddOrEven([0, -1, 2]), 'odd');
    assert.strictEqual(oddOrEven([0, 1, -4]), 'odd');
    assert.strictEqual(oddOrEven([-1023, -1, 3]), 'odd');
})