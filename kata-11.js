const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  let numbers = 0;
  let character = 0;

  for (let i = 0; i < mixedElements.length; i++) {
    if (typeof mixedElements[i] === "number") {
      numbers += mixedElements[i]
    }
    else if (typeof mixedElements[i] === "string") {
      character += mixedElements[i].length
    }
  }
  return `la suma de los numeros es: ${numbers} Y la suma de los caracter es: ${character}`
}

averageWord(mixedElements)

console.log(averageWord(mixedElements));