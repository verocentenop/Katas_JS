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
]
function finderName(array, value) {
  let index = array.indexOf(value)

  if (index !== -1) {
    return [true, index]
  } else {
    return false
  }
}
console.log(finderName(nameFinder, 'Bruce'))
