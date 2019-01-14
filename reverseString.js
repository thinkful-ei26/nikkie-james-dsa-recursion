/*
What is the input to the program
 a string 
What is the output of the program
 the string backwards
What is the input to each recursive calls
 a single letter of the string at the end of the string,
 + the rest of the string sliced 1 letter less
('string')==> 'tring + s'
What is the output of each recursive calls
return the remainder of the string
 'tring' -> 'ring'
*/

function reverseString(string){
    //base case
    if(string===''){
        return '';
    }
    //recursive case
    return reverseString(string.slice(1)) + string[0];
}
console.log(reverseString('abcdefg'));
