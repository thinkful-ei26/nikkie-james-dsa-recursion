'use strict';
/*What is the input to the program
the number in base10 to convert into binary base2

What is the output of the program
the value converted into base2

What is the input to each recursive calls
the number halved
What is the output of each recursive calls
the modulus of the number
*/

function binary(number){
    //base case
    if(number===0){
        return '';
    }
    //recursive case
    let binaryValue = Math.floor(number%2);

    return binary(Math.floor(number/2)) + binaryValue;
}
//console.log(binary(50));

function iterBinary(number){
    let targetString = '';
    for (let i= number;i >=1; i= Math.floor(i/2)){
        targetString = (i%2).toString() + targetString;
    } 
    return targetString;
}
console.log(iterBinary(51));