'use strict';
/* what is the input:
a number (of sheep)

what is the output:
a console log of the number( of sheep) with the message "Another sheep jump over the fence"

what is the input to each recursive call:
one less sheep (number -1 ) 
what is the output to each recursive call:
the number of sheep left, with the message

 */

function sheepCounting(number){
  //base case
  if(number===0){
    return ;
  }
  //recursive case
  console.log(number, 'Another sheep jump over the fence');
  sheepCounting(number -1);
}

sheepCounting(5);

function iterSheepCounting(number){
  for(let i=number; i>0; i--){
    console.log(i, 'Another sheep jump over the fence');
  }
}

iterSheepCounting(5);
