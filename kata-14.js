const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(arr) {
  let result = {}

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i]
    if (!result.hasOwnProperty(word)) {
      result[word] = 1
    } else {
      result[word]++
    }

  }
  console.log(result);
}

repeatCounter(counterWords)