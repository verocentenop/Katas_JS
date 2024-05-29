/* usa un bucle para recorrer el array y añade el array goodProducts para los que tengan mas de 20 ventas y badProducts para los que tengan menos*/

const goodProducts = []
const badProducts = []
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

for (i = 0; i < products.length; i++) {
  if (products[i].sellCount > 20) {
    goodProducts.push(products[i])
  } else {
    badProducts.push(products[i])
  }
}
console.log('Good Products:', goodProducts)
console.log('Bad Products:', badProducts)
