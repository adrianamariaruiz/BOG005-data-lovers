
// Interaccion con el DOM

import { filtrarFunctionName, filtrarFunctionDescription } from './data.js';
import data from './data/harrypotter/data.js';

// console.log(tablePotions, data);

// console.log(data.potions[0].id)
// console.log(data.potions[0].name)
// console.log(data.potions[0].description)
// const myTable = document.getElementByID("myTable")

// Visualizando la data
const dataPotions = data.potions
const btnPotions = document.getElementById("btnPotions")
const sectionSeeData = document.getElementById("sectionSeeData")

const sectionInicial = document.getElementById("sectionInicial")
const btnInitial = document.getElementById("btnInitial")

const sectionFilter = document.getElementById("sectionFilter")
const filterLink = document.getElementById("filterLink")

const sectionOrder = document.getElementById("sectionOrder")
const orderLink = document.getElementById("orderLink")

// funcion para visualizando la data en una tabla
const tablePotions = (info) => {
    let stringTable = ""

    for (let i = 0; i < info.length; i++) {
        let row = "<tr><td>"
        row += info[i].name
        row += "</td><td>"
        row += info[i].description
        row += "</td></tr>"

        stringTable += row
    }
    // return stringTable
    document.getElementById("myTable").innerHTML = stringTable
}

tablePotions(dataPotions)

// VISUALIZACIONES DE PANTALLAS

// para ver la data
btnPotions.addEventListener("click", () => {
    sectionSeeData.style.display = "flex"
    sectionInicial.style.display = "none"
})

// para ver el input filter
filterLink.addEventListener("click", () => {
    sectionFilter.style.display = "flex"
    sectionSeeData.style.display = "flex"
    sectionInicial.style.display = "none"
    sectionOrder.style.display = "none"
})

// para ver el input order
orderLink.addEventListener("click", () => {
    sectionOrder.style.display = "flex"
    sectionSeeData.style.display = "flex"
    sectionInicial.style.display = "none"
    sectionFilter.style.display = "none"
})

// para volver a la pagina inicial
btnInitial.addEventListener("click", () => {
    sectionOrder.style.display = "none"
    sectionSeeData.style.display = "none"
    sectionFilter.style.display = "none"
    sectionInicial.style.display = "flex"
})



// visualizando menu
const btnMenu = document.getElementById("btnMenu")
const sectionMenu = document.getElementById("sectionMenu")

btnMenu.addEventListener("click", () => {
    sectionMenu.style.display = "flex"
})

// filtrado
document.getElementById("filterTable").addEventListener("change", function () {
    let myTable = document.getElementById("myTable")
    let seleccionFiltro = document.getElementById("filterTable").value;

    if (seleccionFiltro === "Name") {
        document.getElementById("wordSearch").addEventListener("keyup", function () {
            myTable.innerHTML = "";
            let wordSearch = document.getElementById("wordSearch").value;

            tablePotions(filtrarFunctionName(dataPotions, wordSearch))

            // let resultado = dataPotions.filter(potions => potions.name.toLowerCase().includes(wordSearch))
            // console.log(resultado)
            //     resultado.map(potions => {
            //         myTable.innerHTML += `
            //     <tr>
            //         <td>${potions.name}</td>
            //         <td>${potions.description}</td>
            //     </tr>
            // `;
            //     });
        });
    }

    else {
        document.getElementById("wordSearch").addEventListener("keyup", function () {
            //         myTable.innerHTML = "";
            let wordSearch = document.getElementById("wordSearch").value;
            tablePotions(filtrarFunctionDescription(dataPotions, wordSearch))
            //         let resultado = dataPotions.filter(potions => potions.description.toLowerCase().includes(wordSearch))
            //         // console.log(resultado)
            //         resultado.map(potions => {
            //             myTable.innerHTML += `
            //             <tr>
            //                 <td>${potions.name}</td>
            //                 <td>${potions.description}</td>
            //             </tr>
            //         `;
            //         });
        });
    }

});


// Funcion de ordenar de forma ascendente y descendente
document.getElementById("orderTable").addEventListener("change", function () {
    let myTable = document.getElementById("myTable")
    let selectionOrder = document.getElementById("orderTable").value;

    myTable.innerHTML = "";

    let result = ''
    function SortArray(x, y) {
        if (x.name < y.name) {
            return -1;
        }
        if (x.name > y.name) {
            return 1;
        }
        return 0;
    }
    if (selectionOrder == "Z-A") {
        result = dataPotions.reverse(SortArray)
        // console.log(result)

        result.map(potions => {
            myTable.innerHTML += `
            <tr>
                <td>${potions.name}</td>
                <td>${potions.description}</td>
            </tr>
          `;
        });
    }
    else {
        result = dataPotions.sort(SortArray)
        // console.log(result)

        result.map(potions => {
            myTable.innerHTML += `
              <tr>
                  <td>${potions.name}</td>
                  <td>${potions.description}</td>
              </tr>
          `;
        });
    }
});