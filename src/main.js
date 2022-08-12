
// Interaccion con el DOM

import { filtrarFunctionName, filtrarFunctionDescription, orderDataAZ, orderDataZA, calcCoincidences, viewCoincidences } from './data.js';
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
const orderTable = document.getElementById("orderTable")
const orderLink = document.getElementById("orderLink")

const sectionOperations = document.getElementById("sectionOperations")
const calcLink = document.getElementById("calcLink")

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
    tablePotions(orderDataAZ(dataPotions))
})

// para ver el input filter
filterLink.addEventListener("click", () => {
    sectionFilter.style.display = "flex"
    sectionSeeData.style.display = "flex"
    sectionInicial.style.display = "none"
    sectionOrder.style.display = "none"
    sectionOperations.style.display = "none"
    tablePotions(dataPotions)
})

// para ver el input order
orderLink.addEventListener("click", () => {
    sectionOrder.style.display = "flex"
    sectionSeeData.style.display = "flex"
    sectionInicial.style.display = "none"
    sectionFilter.style.display = "none"
    sectionOperations.style.display = "none"
    orderTable.value = "orderFor"
})

// para volver a la pagina inicial
btnInitial.addEventListener("click", () => {
    sectionOrder.style.display = "none"
    sectionSeeData.style.display = "none"
    sectionFilter.style.display = "none"
    sectionInicial.style.display = "flex"
    sectionOperations.style.display = "none"
})

// para ver el input de operaciones
calcLink.addEventListener("click", () => {
    sectionOperations.style.display = "flex"
    sectionSeeData.style.display = "flex"
    sectionFilter.style.display = "none"
    sectionInicial.style.display = "none"
    sectionOrder.style.display = "none"
    tablePotions(dataPotions)
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

$("filterTable").addEventListener("change", function () {
    let myTable = $("myTable")
    let seleccionFiltro = $("filterTable").value;

    if (seleccionFiltro === "Name") {
        $("wordSearch").addEventListener("keyup", function () {
            myTable.innerHTML = "";
            let wordSearch = $("wordSearch").value;

            tablePotions(filtrarFunctionName(dataPotions, wordSearch))

        });
    }

    else {
        $("wordSearch").addEventListener("keyup", function () {

            let wordSearch = $("wordSearch").value;
            tablePotions(filtrarFunctionDescription(dataPotions, wordSearch))
        });
    }

});


// Funcion de ordenar de forma ascendente y descendente
$("orderTable").addEventListener("change", function () {
    let myTable = $("myTable")
    let selectionOrder = $("orderTable").value;

    myTable.innerHTML = "";

    if (selectionOrder == "Z-A") {
        tablePotions(orderDataZA(dataPotions))
    }
    else {
        tablePotions(orderDataAZ(dataPotions))
    }
});

// Funcion de calcular de acuerdo a la data
$("check").addEventListener("click", function () {
    let myTable = $("myTable")
    let wordResult = $("wordResult").value;

    myTable.innerHTML = "";

    tablePotions(viewCoincidences(dataPotions, wordResult))

    if (wordResult.length === 0) {
        $("resultOperations").innerHTML = ""
    }
    else {
        $("resultOperations").innerHTML = "The " + calcCoincidences(dataPotions, wordResult) + "%" + " of the potions refer to " + wordResult;
    }


})