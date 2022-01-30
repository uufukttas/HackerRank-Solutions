'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    const sortedArray = arr.sort();
    const length = arr.length;
    let minValue = 0;
    let maxValue = 0;

    let sum = sortedArray.reduce((accumulator, a) => {
        return accumulator + a;
    }, 0); 

    minValue = sum - sortedArray[length - 1];
    maxValue = sum - sortedArray[0];

    console.log(`${minValue} ${maxValue}`);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
