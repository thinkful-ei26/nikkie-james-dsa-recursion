'use strict';
const animalHierarchy = [
    {id: 'Animals', parent: null},
    {id: 'Mammals', parent: 'Animals'},
    {id: 'Dogs', parent:'Mammals' },
    {id: 'Cats', parent:'Mammals' },
    {id: 'Golden Retriever', parent: 'Dogs'},
    {id: 'Husky', parent:'Dogs' },
    {id: 'Bengal', parent:'Cats' }
];

// ==============================
function traverse(animalHierarchy, parent) {
    let node = {};
    animalHierarchy.filter(item => item.parent === parent)
                   .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
    return node;  
}
console.log(traverse(animalHierarchy, null));
/*
lines 2-10 simply define the sample array to be the input.
each element of the array is an object with an id and a parent.

line 13 takes our sample array and a value for parent.
line 14 creates an object. which is our goal object.
line 15 loops through each of the objects in the array, each object is tested in the array to 
see if the parent matches this function instance' parent
// base case is when the filter has 0 objects that pass the test, there will be no more
recursive functions called.
traverse is only called on filtered items,

for line 16 all of the passing tests objects have their id assigned to the node object key
, with the value of that key being a recursive call that now has the same sample array 
with the parent value set to the id of the item that passed the filter.

when no more items pass the filter, there will be no forEach calls to make a new recursive call
and the node goal object with keys of the parents' and values of those nested objects are object's
with the matching parent.


*/