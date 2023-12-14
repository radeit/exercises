let Array = [ "q", "w", "w", "w", "e", "i", "i", "u", "r"];
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)

console.log(findDuplicates(Array))