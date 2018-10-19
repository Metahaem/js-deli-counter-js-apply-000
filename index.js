//Task 1
// "Welcome, Ada. You are number 1 in line."

function takeANumber(array, name) {
  array.push(name);
  return("Welcome, " + name + ". You are number " + array.length + " in line.");
}
var i = 0;
function takeANumberAlt(array) {
  
  array.push(i);
  i++;
}

//Task 2

function nowServing(array) {
  if (array.length > 0) {
  return ("Currently serving " + array.shift() + ".");
}
else {
  return "There is nobody waiting to be served!";
}
}

//Task 3
function currentLine(array) {
  if (array.length > 0) 
  {
    var i;
    let posName = [];
   for (let i = 0; i < array.length; i++) 
<<<<<<< HEAD
       {posName.push((i + 1) + ". " + array[i])}
       //Above loop gives array posName its values
        return ("The line is currently: " + posName.join(', '));
=======
       {posName.push(" " + (i + 1) + ". " + array[i])}
       //Above loop gives array posName its values
        return ("The line is currently:  " + posName.join()); 
>>>>>>> c74db549fdebec9eb81b58c388e3a51965455fa1
       }
       
  else
  {return "The line is currently empty.";
  }
}