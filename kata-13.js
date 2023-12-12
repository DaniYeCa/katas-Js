const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function finderName(param, array) {
  let found = false;
  let position = 0;

  for (let i = 0; i < array.length; i++) {
    let name = array[i];
    if (name === param) {
      found = true;
      position = i;
    }
  }
  if (found) {
    return `Es: ${found} y esta en la posicion: ${position}`;
  } else {
    return `No se ha encontrado ningun nombre así`;
  }
}


console.log(finderName('Jessica', nameFinder));