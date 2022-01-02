'use strict';

const fs = require('fs');

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let colLength = arr[0].length - 1;

    for(let index = 0; index < arr.length; index++) {
        for (let key = 0; key < arr.length; key++) {
            if (key === index) {
                leftDiagonal += arr[index][key];
            }
        }
    }

    arr.forEach((item, index) => {
        let column = index;
        column = colLength - column;
        rightDiagonal += arr[index][column]
    })

    return Math.abs(leftDiagonal - rightDiagonal);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
