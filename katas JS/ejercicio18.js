//Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.

const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]

for (i = 0; i < placesToTravel.length; i++) {
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1)
    i--
  }
}
console.log(placesToTravel)
