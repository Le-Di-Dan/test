const inputElement = document.getElementById("amount")
const generateButton = document.querySelector(".container > .interactor > .generator")
const outputElement = document.getElementById("result-content")
let inputValue = ""


inputElement.addEventListener("input", function(e) {
    const newInputValue = e.target.value
    console.log(newInputValue)
    const nonNegativePattern = /^(0|[1-9]\d*)$/
    inputValue = newInputValue.length === 0 ? "" : nonNegativePattern.test(newInputValue) ? newInputValue : inputValue
    inputElement.value = inputValue
    generateButton.disabled = inputValue.length === 0
})

generateButton.addEventListener("click", function() {
    const amount = +inputValue
    const arrayStructure = Array(amount)
    const generatedArray = Array.from(arrayStructure, (item, index) => {
        return index === 0 ? 1 : Math.ceil(amount * Math.random())
    })
    const result = JSON.stringify(generatedArray)
    outputElement.innerText = result.replace(/,/g, ", ")
})