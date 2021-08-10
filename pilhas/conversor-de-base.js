function baseConverter(decNumber, base) {
    var restStack = [],
    rest,
    baseString = '',
    digits = '0123456789ABCDEF'

    while(decNumber > 0) {
        rest = Math.floor(decNumber % base)
        restStack.push(rest)
        decNumber = Math.floor(decNumber / base)
    }

    while(restStack.length > 0) {
        baseString += digits[restStack.pop()]
    }

    return baseString
}

console.log(baseConverter(12, 10))

// function conversorDeBase(numeroDecimal, base) {
//     let restStack = [],
//         rest,
//         stringBase = "",
//         digitos = "0123456789ABCDEF";
//     while (numeroDecimal > 0) {
//         rest = Math.floor(numeroDecimal % base);
//         restStack.push(rest);
//         numeroDecimal = Math.floor(numeroDecimal / base);
//     }

//     while (restStack.length > 0) {
//         stringBase += digitos[restStack.pop()];
//     }
//     return stringBase;
// }
// console.log(conversorDeBase(12, 2));