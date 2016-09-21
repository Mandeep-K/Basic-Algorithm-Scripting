/*Return Largest Numbers in Arrays 
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Comparison Operators*/
function largestOfFour(arr) {
  var maxArr=[];
  for(var i=0; i<arr.length; i++){
     var subArr=arr[i];
    var len=subArr.length;
    var max=subArr[0];
    for(var j=1; j<subArr.length;j++){
      if(subArr[j]>max)
        max=subArr[j];
    }
    maxArr[i]=max;
    
  }
  // You can do this!
  return maxArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
