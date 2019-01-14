'use strict';

// What is the input to the program? Input is both the string and the seperator (either a comma, space, etc)
// What is the output of the program? An array with different strings seperated based the seperator 
// What is the input to each recursive calls? A sliced (smaller) array with the seperator 
// What is the output of each recursive calls? Depends: 
//1. If the char is the seperator, then the output is the words at that point + recursive call 
//2. If its not the seperator, then just recursively call the fn at the next index point 

// strSplitter(str, ",")

// "Hi there Nikkie" , " "
//look through each character and see if that char is the seperator. if its not, move on. if it is, it'll take everything thats before,

function stringSplitter(str, seperator, index){
  //base case: if we run out of string, stop
  if(index>=str.length){
    return [str];
  }

  //first recursive case: if the str at the index = the seperator
  if(str[index]===seperator){
    return [str.slice(0, index).trim(), ...stringSplitter(str.slice(index), seperator, index+1)];
  }

  //second recursive case: isnt the seperator, move on
  return stringSplitter(str, seperator, index+1);
}

console.log(stringSplitter('Hi there Nikkie ', ' ', 0));