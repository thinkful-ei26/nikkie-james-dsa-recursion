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
//console.log(triangles(6));
//10
//1, 3, 6, 10, 15, 21, 28, 36, 45, 55

function iterTriangles(num){
    let sum = 0;
    for(let i=num; i>0; i--){
       sum += i;
    }
    return sum;
}

function test(someNum){
    for(let i=0; i< someNum; i++){
        console.log(iterTriangles(i));
    }
}
test(10);
//console.log(iterTriangles(5));