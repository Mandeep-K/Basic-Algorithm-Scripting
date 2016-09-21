/*Find the Longest Word in a String 
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
String.length*/
function findLongestWord(str) {
  var myArray=str.split(" ");
  var maxLength=1;
  for(var i=0; i<myArray.length;i++){
    var l=myArray[i].length;
    if(l>maxLength)
      maxLength=l;
  }
  return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");