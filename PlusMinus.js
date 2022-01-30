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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    const length = arr.length;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > 0) {
            positiveCount += 1;
        } else if (arr[index] < 0) {
            negativeCount += 1;
        } else {
            zeroCount += 1;
        }
    }

    console.log(positiveCount / length);
    console.log(negativeCount / length );
    console.log(zeroCount / length);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
