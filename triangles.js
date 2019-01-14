

//[1 , 0 ,0 ]
//no sec layer


// [0, *, 0] add new layer, ++ this layer
// filter (  if === ?)//to become a star or space
// pass filter = star
// no pass = space

//    if it is + or - 1 single number (condition to pass)

// [ X, X , X ] filter number is 2 ( any star previous layer +- 1?)
// star is at index 1

//[  0 pass => *, 1 ! +- 1 fail => space, 2-1=star => star ]
//[ *, 0 , *]

//in each future recursive call we compare (the previous layer: var)  && (condition: constant doesnt change)

/*
What is the input to the program?
some number to count up to for how many triangles to make.
->> Num
What is the output of the program
the what purpose?
 how many the number of stars on each side? a number! this many.

 how we calculate that?
 filter each layer against (condition): +-1 prev layer

What is the input to each recursive calls
the previous layer +1 bumped up by one( now it's not the bottom layer)
the condition is 
What is the output of each recursive calls
*/