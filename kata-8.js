const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let longetWord = param[0];

  for (let i = 1; i < param.length; i++) {
    const element = param[i];

    if (element.length > longetWord.length) {
      longetWord = element;
    }
  }

  return longetWord
}

findLongestWord(avengers);

