const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(param) {
  let sum = 0 // Inicializamos la suma en 0

  for (let i = 0; i < param.length; i++) {
    sum += param[i]
  }
  return sum
}
const totalSum = sumAll(numbers)
console.log(totalSum)
