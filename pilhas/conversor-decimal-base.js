function convertOthersBaseToDecimal(num, base) {
    let numDecimal = 0,
        arr = [],
        digitosArr = [],
        digitos;
    num = num.toString();
    arr = num.split("");
    digitos = "0123456789ABCDEF";
    digitosArr = digitos.split("");
    digitosArr = digitosArr.splice(0, base);
    // console.log(digitosArr, digitosArr.indexOf((base-1).toString()), base-1);
    // if(digitosArr.indexOf((base-1).toString()) === base-1){
        while (arr.length > 0) {
            numDecimal += digitosArr.indexOf(arr.shift()) * Math.pow(base, arr.length);
        }
    // }else{
    //     numDecimal = NaN;
    // }
      
    return numDecimal;
}
console.log(convertOthersBaseToDecimal('1001341', 2));
// convertOthersBaseToDecimal("10", 10);