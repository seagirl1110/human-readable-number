module.exports = function toReadable(number) {
    const numberColl = number.toString().split('');
    const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    if (numberColl.length === 1) {
        return num[numberColl[0]];
    }

    if (numberColl.length === 2) {
        if (numberColl[0] === '1') {
            if (numberColl[1] === '0') {
                return `ten`;
            }

            if (numberColl[1] === '1') {
                return `eleven`;
            }

            if (numberColl[1] === '2') {
                return `twelve`;
            }

            if (numberColl[1] === '3') {
                return `thirteen`;
            }

            if (numberColl[1] === '5') {
                return `fifteen`;
            }

            if (numberColl[1] === '8') {
                return `${num[numberColl[1]]}een`;
            }

            return `${num[numberColl[1]]}teen`;
        }

        if (numberColl[0] === '2') {
            if (numberColl[1] === '0') {
                return `twenty`;
            }
            return `twenty ${num[numberColl[1]]}`;
        }

        if (numberColl[0] === '3') {
            if (numberColl[1] === '0') {
                return `thirty`;
            }
            return `thirty ${num[numberColl[1]]}`;
        }

        if (numberColl[0] === '4') {
            if (numberColl[1] === '0') {
                return `forty`;
            }
            return `forty ${num[numberColl[1]]}`;
        }

        if (numberColl[0] === '5') {
            if (numberColl[1] === '0') {
                return `fifty`;
            }
            return `fifty ${num[numberColl[1]]}`;
        }

        if (numberColl[0] === '8') {
            if (numberColl[1] === '0') {
                return `${num[numberColl[0]]}y`;
            }
            return `${num[numberColl[0]]}y ${num[numberColl[1]]}`;
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
            if (numberColl[2] === '0') {
                return `${num[numberColl[0]]} hundred ten`;
            }

            if (numberColl[2] === '1') {
                return `${num[numberColl[0]]} hundred eleven`;
            }

            if (numberColl[2] === '2') {
                return `${num[numberColl[0]]} hundred twelve`;
            }

            if (numberColl[2] === '3') {
                return `${num[numberColl[0]]} hundred thirteen`;
            }

            if (numberColl[2] === '5') {
                return `${num[numberColl[0]]} hundred fifteen`;
            }

            if (numberColl[2] === '8') {
                return `${num[numberColl[0]]} hundred ${num[numberColl[2]]}een`; 
            }

            return `${num[numberColl[0]]} hundred ${num[numberColl[2]]}teen`; 
        }

        if (numberColl[1] === '2') {
            if (numberColl[2] === '0') {
                return `${num[numberColl[0]]} hundred twenty`;
            }
            return `${num[numberColl[0]]} hundred twenty ${num[numberColl[2]]}`; 
        }

        if (numberColl[1] === '3') {
            if (numberColl[2] === '0') {
                return `${num[numberColl[0]]} hundred thirty`;
            }
            return `${num[numberColl[0]]} hundred thirty ${num[numberColl[2]]}`; 
        }

        if (numberColl[1] === '4') {
            if (numberColl[2] === '0') {
                return `${num[numberColl[0]]} hundred forty`;
            }
            return `${num[numberColl[0]]} hundred forty ${num[numberColl[2]]}`; 
        }

        if (numberColl[1] === '5') {
            if (numberColl[2] === '0') {
                return `${num[numberColl[0]]} hundred fifty`;
            }
            return `${num[numberColl[0]]} hundred fifty ${num[numberColl[2]]}`; 
        }

        if (numberColl[1] === '8') {
            if (numberColl[2] === '0') {
                return `${num[numberColl[0]]} hundred ${num[numberColl[1]]}y`;
            }
            return `${num[numberColl[0]]} hundred ${num[numberColl[1]]}y ${num[numberColl[2]]}`;            
        }
    
        if (numberColl[2] === '0') {
            return `${num[numberColl[0]]} hundred ${num[numberColl[1]]}ty`;
        }
        return `${num[numberColl[0]]} hundred ${num[numberColl[1]]}ty ${num[numberColl[2]]}`;
    }
}
