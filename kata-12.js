const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  const wordsDuplicate = []

  for (let i = 0; i < param.length; i++) {
    let word = param[i]
    if (!wordsDuplicate.includes(word)) {
      wordsDuplicate.push(word)
    }
  }
  return wordsDuplicate
}

console.log(removeDuplicates(duplicates));