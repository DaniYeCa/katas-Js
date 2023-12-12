const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

function setCamisera(param) {
  const camisetaDuplicate = [];

  for (let i = 0; i < param.length; i++) {
    let camiseta = param[i];
    if (!camisetaDuplicate.includes(camiseta)) {
      camisetaDuplicate.push(camiseta);
    }
  }
  return camisetaDuplicate;
}

console.log(setCamisera(products));