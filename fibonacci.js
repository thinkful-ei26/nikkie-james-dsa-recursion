'use strict';
/*What is the input to the program
the number to count up to
What is the output of the program
the sequence of the fibonacci numbers
What is the input to each recursive calls
the next number in the sequence
What is the output of each recursive calls
what the number is?
*/
function fibonacci(n){
  if(n===0|| n===1){
    return n;
  }
  else return fibonacci(n-1) + fibonacci(n-2);
}
//console.log(fibonacci(8));
let fibonacciArray = (n=0, memo =[])=>{

  if(memo[n]!== undefined){
    return memo[n];
  }
  if(n <=0){
    memo[n]=0;
    return 0;
  }
  else if (n===1){
    memo[n] = 1;
    return 1;
  }
  for(let i=2; i<=n; i++){
    memo[i] = fibonacciArray(i-1, memo) + fibonacciArray(i-2, memo);
  }
  return memo.toString(', ');
};
// console.log(fibonacciArray(20));

function iterFib(n){
  let first=1;
  let second=1; 
  let fib;

  for(let i=2; i <n; i++){
    fib=first + second; 
    first = second;
    second = fib;
  }

  return fib;
}

console.log(iterFib(7));