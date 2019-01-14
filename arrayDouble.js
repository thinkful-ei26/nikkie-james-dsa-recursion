'use strict';
// What is the input to the program? An array of unknown numbers
// What is the output of the program? An array with each input from the original array doubled
// What is the input to each recursive calls? A sliced version of the previous array (each time the array gets smaller)
// What is the output of each recursive calls? The first number of the array doubled


function arrayDouble(arr){
  //base case
  if(arr.length===0){
    return [];
  }

  //recursive
  return [arr[0]*2, ...arrayDouble(arr.slice(1))];
}

console.log(arrayDouble([1,2,3]));