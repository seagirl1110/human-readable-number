module.exports = function toReadable(number) {
    const numberColl = number.toString().split('');
    const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const numTeen = { 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 15: 'fifteen', 18: 'eighteen'};
    const numTens = { 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 80: 'eighty'};

    if (numberColl.length === 1) {
        return num[numberColl[0]];
    }

    if (numberColl.length === 2) {
        if (numberColl[0] === '1') {
            if (typeof (numTeen[+numberColl[1] + 10]) !== 'undefined') {
                return numTeen[+numberColl[1] + 10];
            }
            return `${num[numberColl[1]]}teen`;
        }

        if (typeof (numTens[numberColl[0] + '0']) !== 'undefined') {
            if (numberColl[1] === '0') {
                return numTens[numberColl[0] + '0'];
            }
            return `${numTens[numberColl[0] + '0']} ${num[numberColl[1]]}`;
        }

        if (numberColl[1] === '0') {
            return `${num[numberColl[0]]}ty`;
        }
        return `${num[numberColl[0]]}ty ${num[numberColl[1]]}`;
    }

    if (numberColl.length === 3) {
        if (numberColl[1] === '0') {
            if (numberColl[2] === '0') {
                return `${num[numberColl[0]]} hundred`;
            }
            return `${num[numberColl[0]]} hundred ${num[numberColl[2]]}`;
        }

        if (numberColl[1] === '1') {
            if (typeof (numTeen[+numberColl[2] + 10]) !== 'undefined') {
                return `${num[numberColl[0]]} hundred ${numTeen[+numberColl[2] + 10]}`;
            }
            return `${num[numberColl[0]]} hundred ${num[numberColl[2]]}teen`; 
        }

        if (typeof (numTens[numberColl[1] + '0']) !== 'undefined') {
            if (numberColl[2] === '0') {
                return `${num[numberColl[0]]} hundred ${numTens[numberColl[1] + '0']}`;
            }
            return `${num[numberColl[0]]} hundred ${numTens[numberColl[1] + '0']} ${num[numberColl[2]]}`; 
        }
    
        if (numberColl[2] === '0') {
            return `${num[numberColl[0]]} hundred ${num[numberColl[1]]}ty`;
        }
        return `${num[numberColl[0]]} hundred ${num[numberColl[1]]}ty ${num[numberColl[2]]}`;
    }
}