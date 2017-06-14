#!/usr/bin/env node

hintkeys="1234567890";
// hintkeys="0123456789";
// hintkeys="ab";
// hintkeys="12345";

// 0 -> 0
// 1 -> 1
// 9 -> 9
// 10 -> 00
// 11 -> 01
// 19 -> 09
// 20 -> 10
// 21 -> 11

function getNumHintStringsWithLength(hintKeys, hintStringLength) {
    return hintKeys.length ** hintStringLength;
}

function getNumHintStringsWithMaxLength(hintKeys, hintStringMaxLength) {
    var res = 0, hintStringLength = hintStringMaxLength;

    while(hintStringLength > 0) {
        res += getNumHintStringsWithLength(hintKeys, hintStringLength);
        hintStringLength--;
    }

    return res;
}

function getHintString(n) {
    var res = [],
        len = hintkeys.length;
    do {
        res.push(hintkeys[n % len]);
        n -= n % len;
        n /= len;
        n -= 1;
        // n = Math.floor(n / len) - 1;
    } while (n >= 0);

    return res.reverse().join("");
}

function getHintNumber(str) {
    var character, i, index, res = 0;

    for (i = 0; i < str.length; i++) {
        character = str[str.length - i - 1];
        index = hintkeys.indexOf(character);

        if (i == 0) {
            res += index;
        } else {
            res += (index + 1) * hintkeys.length ** i;
        }
    }

    return res;
}

for(i = 0; i < 120; i++) {
    console.log(i + " -> " + getHintString(i) + " -> " + getHintNumber(getHintString(i)));
}
// console.log(getHintNumber("bb"));

// console.log(getHintNumber("1"));
// console.log(getHintNumber("2"));
// console.log(getHintNumber("0"));
// console.log(getHintNumber("10"));
// console.log(getHintNumber("20"));
// console.log(getHintNumber("29"));

// console.log(getNumHintStringsWithMaxLength("0123456789", 2));


