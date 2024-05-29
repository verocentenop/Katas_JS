// usa un bucle para sumar el total de las ventas y mostrar por cosola la media de ventas

const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

let totalSales = 0

for (i = 0; i < products.length; i++) {
  totalSales += products[i].sellCount
}
let media = totalSales / products.length

console.log('Media de ventas:', media)
console.log('Ventas totales:', totalSales)
