// GESTION DES INPUT

const departure = document.querySelector("#inputDeparture")
const arrival = document.querySelector("#inputArrival")
const date = document.querySelector("#inputDate")

departure.addEventListener("keydown", () => {
    console.log(departure.value)
})

//GESTION DU BOUTON
const button = document.querySelector("#search_btn")

button.addEventListener("click", () => {
    alert(departure.value)
})