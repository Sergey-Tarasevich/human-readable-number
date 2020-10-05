module.exports = function toReadable(number) {

    if (number > 999) return new Error(`${number} Enter correct value`)
    if (number === 0) return 'zero'

    arr = number.toString().split('')

    arr1_19 = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };
    arr20_90 = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    let str = ''

    if (number < 20) {
        str = arr1_19[number]
    }

    if (number >= 20 && arr.length == 2) {
        if (number % 10 == 0) return str = arr20_90[Math.floor(number / 10)]
        else str = arr20_90[Math.floor(number / 10)] + ' ' + arr1_19[number % 10]
    }

    if (number > 20 && arr.length == 3) {

        if (number % 100 == 0) str = arr1_19[Math.floor(number / 100)] + ' hundred';

        else if (number % 100 > 0 && number % 100 < 20) str = arr1_19[Math.floor(number / 100)] + ' hundred ' + arr1_19[number % 100]
        else {

            if (number % 100 % 10 == 0) str = arr1_19[Math.floor(number / 100)] +
                ' hundred ' + arr20_90[Math.floor(number % 100 / 10)]

            else str = arr1_19[Math.floor(number / 100)] +
                ' hundred ' + arr20_90[Math.floor(number % 100 / 10)] +
                ' ' + arr1_19[number % 10]
        }
    }
    return str
}
