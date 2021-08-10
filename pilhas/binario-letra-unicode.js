function convertBinarioDecimal(binario){
    let numDecimal = 0,
    arr = [];
    binario = binario.toString();
    arr = binario.split("");
    if(!(/[^01]/g.test(binario))){      
        while(arr.length > 0){
            numDecimal += arr.shift() * Math.pow(2, arr.length);
        }
        
    }else{
        numDecimal = NaN;

    }
    return numDecimal;
    
}

//OBS: binario de c
function decimalCodeUnicode(decimal) {
    let codeUnicode = String.fromCharCode(decimal);
    console.log(codeUnicode);
}


console.log(convertBinarioDecimal(1010));
console.log(decimalCodeUnicode(10))