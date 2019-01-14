'use strict';
// What is the input to the program? A word
// What is the output of the program? All permutations possible for that given word
// What is the input to each recursive calls
// What is the output of each recursive calls

// east --> e + foo('ast) + foo('sta') + foo('tas')

//Base case: 
//return an array with whatever's left 

//recursive case:
//

//Gonna be returning an array of permutations 
//char + anagrams(str.slice(1))
//[...char + anagrams(str.slice(1))]

//function(str)



function anagrams(str){
  //base case:
  if(str.length===1){
    return [str];
  }

  let ret =[];

  //loop takes care of the prefixes 
  for(let i=0; i<str.length;i++){
    let current = str[i];
    let remaining = str.slice(0,i)+str.slice(i+1);
    let results = anagrams(remaining);
    let arr = results.map(result=> current + result); //gives us 
    ret = [...ret, ...arr];
  }

  return ret; 

}

console.log(anagrams("east"));