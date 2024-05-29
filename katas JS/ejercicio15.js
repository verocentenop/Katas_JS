//usa includes en un bucle para mostrar por consola todos los valores que incluyan "camiseta"

const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta'
]

for (let i = 0; i < products.length; i++) {
  if (products[i].includes('Camiseta')) {
    console.log(products[i])
  }
}
