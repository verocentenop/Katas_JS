// 1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0])

// 1.2 Cambia el primer elemento de avengerss a "IRONMAN"
const avengerss = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
avengerss[0] = 'IRONMAN'
console.log(avengerss)

// 1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengersss = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengersss.length)

//  1.4 Añade 2 elementos al array: "Morty" y "Summer".
// Muestra en consola el último personaje del array
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

// 1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyChars = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyChars.pop()
console.log(
  rickAndMortyChars[0],
  rickAndMortyChars[rickAndMortyChars.length - 1]
)

// 1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyChar = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyChar.splice(1, 1)
console.log(rickAndMortyChar)
