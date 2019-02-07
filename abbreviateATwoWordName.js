// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot seperating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

function abbrevName(name) {
  // code away
  //split name parameter first
  var splitName = name.split(" ");
  // get first index of first elements[0][0] concat with a "dot"
  // then concat it with the first index of the second element[1][0]
  return splitName[0][0].toUpperCase() + "." + splitName[1][0].toUpperCase();
}

var name = "Patrick Feenan";
console.log(abbrevName(name));
