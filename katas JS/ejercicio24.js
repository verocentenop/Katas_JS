// usa un bucle para sumar el total de las ventas de todos los productos
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]
let totalSales = 0
for (let i = 0; i < products.length; i++) {
  totalSales += products[i].sellCount
}
console.log('Ventas totales:', totalSales)
