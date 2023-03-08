/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertButton = document.getElementById("convert-button")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")


convertButton.addEventListener("click",function(){
    let inputVal = document.getElementById("number-to-convert").value
    convertAll(inputVal)  
})

function convertAll(num){

    lengthEl.innerHTML= `<p> ${num} meters = ${(num * 3.281).toFixed(3)} feet |
                     ${num} feet = ${(num / 3.281).toFixed(3)} meters</p>` 
                    
    volumeEl.innerHTML= `<p> ${num} litres = ${(num * 0.264).toFixed(3)} gallons |
                     ${num} gallons = ${(num / 0.264).toFixed(3)} litres</p>`                 
                     
    massEl.innerHTML= `<p> ${num} kilos = ${(num * 2.204).toFixed(3)} pounds |
                     ${num} pounds = ${(num / 2.204).toFixed(3)} kilos</p>`                 
     }

