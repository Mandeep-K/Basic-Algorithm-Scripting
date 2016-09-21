/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ? 'N', 'B' ? 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
*/
function rot13(str) { // LBH QVQ VG!
  var result="";
  for(var i=0; i<str.length; i++){
    if(str.charAt(i)==' '|| str.charAt(i)==='!'|| str.charAt(i)==='.'|| str.charAt(i)==='?'){
      switch(str.charAt(i)){
        case ' ':
          result+=" ";
          break;
        case '?':
          result+="?";
          break;
        case '!':
          result+="!";
          break;
        case '.':
          result+=".";
          break;
      }
    }else{
    var chCode=str.charCodeAt(i);
    chCode+=13;
    if(chCode>90){
      var difference=chCode-90;
      chCode=64+difference;
    }
      result+=String.fromCharCode(chCode);
    
    
  }}
  return result;
}

// Change the inputs below to test
rot13("SERR");
