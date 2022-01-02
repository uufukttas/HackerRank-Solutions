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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    const timeFormat = s.replace(/[0-9:]/g, '');
    let hour = s.split(':')[0];
    const min = s.split(':')[1];
    const sec = s.split(':')[2].replace(/[^0-9]/g, '');

    hour = hour === '12' ? '00' : hour;
    hour = timeFormat === 'PM' ? Number(hour, 10) + 12 : hour;

    return `${hour}:${min}:${sec}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
