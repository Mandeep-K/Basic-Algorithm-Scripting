/*Chunky Monkey 
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.push()
Array.prototype.slice()*/
function chunkArrayInGroups(arr, size) {
  var newArry=[];
  var i=0;
  while(i<arr.length){
    newArry.push(arr.slice(i,i+size));
    i=i+size;
  }// Break it up.
  return newArry;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
