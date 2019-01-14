/*
What is the input to the program
the number to analyze up to
What is the output of the program
the numbers that fit the formula
What is the input to each recursive calls
the next additive amount
What is the output of each recursive calls
the next number in the sequence
*/
              
function triangles(number){
    if(number<=0){
        return 0;
    }
    return number + triangles(number - 1);

}
console.log(triangles(6));
//10
//1, 3, 6, 10, 15, 21, 28, 36, 45, 55