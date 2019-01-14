'use strict';
// What is the input to the program? A Number
// What is the output of the program? The factorial of that number
// What is the input to each recursive calls? The number - 1 
// What is the output of each recursive calls? The number multiped by the number before it 

function factorial(n){
  //base case:
  if(n===1){
    return 1;
  }

  return n * factorial(n-1);
}

console.log(factorial(3));

function iterFactorial(n){
  let factorial; 
  for(let i=0; i<n; i++){
    factorial*=n; 
  }

  return factorial;
}
console.log(iterFactorial(3));
