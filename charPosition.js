/* Instead of having your function countLetters return just
the count of each letter, the requirement has changed to
return all the indices (zero-based positions) in the string
where each character is found. So for each letter, we're no
longer returning just one number to represent its number of
occurrences, but rather (potentially) multiple numbers to
represent all the places in the string that it shows up.
*/


var characters = "lighthouse in the hosue"
characters = characters.replace(/\s+/g, '')
var ltrs = {}
//var ltrs = count



//console.log(characters)
function countLetters(letters) {
  var letters = characters
  for (i in letters) {
    if (ltrs[letters[i]]){
      ltrs[letters[i]] += 1


  //  } else if (ltrs[letters[i]] = ' ') {
  //    ltrs[letters[i]].splice
    } else {
      ltrs[letters[i]] = 1
    }
  } return ltrs
}

console.log(countLetters(characters))