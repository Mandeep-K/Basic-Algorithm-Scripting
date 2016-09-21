/*Title Case a Sentence 
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()*/
function titleCase(str) {
  var myArray=str.split(" ");
  for(var i=0 ; i<myArray.length; i++){
    myArray[i]=myArray[i].charAt(0).toUpperCase()+myArray[i].substr(1).toLowerCase();
  }
  var s=myArray.join(" ");
  //alert(s);
  return s;
}

titleCase("I'm a little tea pot");