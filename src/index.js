module.exports = function toReadable (number) {
    
let arr = [
    ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    [, 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    [, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    ['hundred']
    ]
    
    let arrN = Array.from(number.toString());
    
    if (number.toString().length == 1) {
        return arr[0][number];
    }
    
    else if (number.toString().length == 2) {
        if (number >= 20 && number % 10 != 0)
            return `${arr[2][arrN[0]]} ${arr[0][arrN[1]]}`
        else if (number >= 10 && (number % 10 == 0))
            return arr[2][arrN[0]]
        else if (number < 20 && number % 10 != 0)
            return arr[1][arrN[1]]
    }
    
    else if (number.toString().length == 3) {
        if (number % 100 == 0)
            return `${arr[0][arrN[0]]} ${arr[3]}`
        else if ((number % 100 != 0) && (number % 10 == 0))
            return `${arr[0][arrN[0]]} ${arr[3]} ${arr[2][arrN[1]]}`
        else if ((number % 100 != 0) && (number % 10 != 0) && (arrN[1] != 0) && (arrN[1] != 1))
            return `${arr[0][arrN[0]]} ${arr[3]} ${arr[2][arrN[1]]} ${arr[0][arrN[2]]}`
        else if ((number % 100 != 0) && (number % 10 != 0) && (arrN[1] == 0))
            return `${arr[0][arrN[0]]} ${arr[3]} ${arr[0][arrN[2]]}`
        else if ((number % 100 != 0) && (number % 10 != 0) && (arrN[1] == 1))
            return `${arr[0][arrN[0]]} ${arr[3]} ${arr[1][arrN[2]]}`
    }
}