var characters = "lighthouse in the house"
characters = characters.replace(/\s+/g, '')
var ltrs = {}

//var ltrs = count



//console.log(characters)
function countPosition(letters) {
  for (i in characters) {
      ltrs[i] = characters[i]
    }
  return ltrs
}

console.log(countPosition(characters))