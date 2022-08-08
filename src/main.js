
// Interaccion con el DOM

import { filtrarFunctionName, filtrarFunctionDescription, orderDataAZ, orderDataZA } from './data.js';
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
const $ = (element) => document.getElementById(element); //truco pro

const btnMenu = $("btnMenu")
// const sectionMenu = $("sectionMenu")
const optionMenu = $("optionMenu")

btnMenu.addEventListener("click", () => {
    optionMenu.classList.toggle("hide")
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

        });
    }

    else {
        document.getElementById("wordSearch").addEventListener("keyup", function () {

            let wordSearch = document.getElementById("wordSearch").value;
            tablePotions(filtrarFunctionDescription(dataPotions, wordSearch))
        });
    }

});


// Funcion de ordenar de forma ascendente y descendente
document.getElementById("orderTable").addEventListener("change", function () {
    let myTable = document.getElementById("myTable")
    let selectionOrder = document.getElementById("orderTable").value;

    myTable.innerHTML = "";

    if (selectionOrder == "Z-A") {
        tablePotions(orderDataZA(dataPotions))
    }
    else {
        tablePotions(orderDataAZ(dataPotions))
    }
});