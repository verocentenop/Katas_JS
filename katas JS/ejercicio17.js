//usa for in para imprimir por consola los datos del objeto

const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}

for (const key in alien) {
  console.log(alien[key])
}
