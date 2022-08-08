
// Funciones puras

export const filtrarFunctionName = (data, option) => {
  let dataFilter = data.filter((potions) => potions.name.toLowerCase().includes(option))
  return dataFilter
}

export const filtrarFunctionDescription = (data, option) => {
  let dataFilter = data.filter((potions) => potions.description.toLowerCase().includes(option))
  return dataFilter
}

function SortArray(x, y) {
  if (x.name < y.name) {
    return -1;
  }
  if (x.name > y.name) {
    return 1;
  }
  return 0;
}

export const orderDataZA = (data) => {
  let orderData = data.reverse(SortArray)
  return orderData
}

export const orderDataAZ = (data) => {
  let orderData = data.sort(SortArray)
  return orderData
}





// Llamar la data con .map
//import { potionsData } from ‘./data.js’;
// //console.log(potionsData,data);
// let dataPotions = data.potions;
// dataPotions.map(potions => {
//     tablePotions.innerHTML += `
//     <tr>
//         <td>${potions.name}</td>
//         <td>${potions.description}</td>
//     </tr>
// `;
// });

// Funcion para filtrar por palabra



// ordenar la data
// export const sorData = () => {
//   return 'sorData'
// }




// calcular
// export const computeStats = () => {
//   return 'computeStats'
// }


// function countS ameEnds(str) {
// 	let cantidad = 0
// 	arrayPalabras = (str.toLowerCase()).match(/([A-Za-z])\w+/g)
// 	for(let i = 0; i<arrayPalabras.length; i++){
// 		console.log(arrayPalabras[i].substring(0,1), arrayPalabras[i].substring(arrayPalabras[i].length - 1))
// 		if (arrayPalabras[i].substring(0,1) == arrayPalabras[i].substring(arrayPalabras[i].length - 1)) {
// 			cantidad +=1
// 		} else {
// 			cantidad += 0
// 		}
// 	}
// 	return cantidad
// }

// function societyName(friends) {
// 	friends.sort()
// 	let letra = ''
// 	for(let i = 0; i < friends.length; i++){
// 		letra += friends[i].substring(0, 1)
// 	}
// 	return letra
// }
// const friends = ['Pedro', 'Andres']