/*Falsy Bouncer 
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.prototype.filter()*/
function isFalsy(value){
  if(value!==""||isNaN(value)===false||value!==false||value!==0||value!==null||value!==undefined){
    return value;
  }
}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(isFalsy);
}

bouncer([7, "ate", "", false, 9]);
