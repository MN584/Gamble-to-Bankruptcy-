let spinnerOneEl = document.getElementById("slotValueOne")
let spinnerTwoEl = document.getElementById("slotValueTwo")
let spinnerThreeEl = document.getElementById("slotValueThree")
let valueOne = 0
let valueTwo = 0
let valueThree = 0
slotValueOne.innerText = valueOne
slotValueTwo.innerText = valueTwo
slotValueThree.innerText = valueThree
function spin() {
  valueOne = Math.floor(Math.random()*10)
  valueTwo = Math.floor(Math.random()*10)
  valueThree = Math.floor(Math.random()*10)
  slotValueOne.innerText = valueOne
  slotValueTwo.innerText = valueTwo
  slotValueThree.innerText = valueThree
  if (valueOne == 7) {
    spinnerOneEl.classList.add("seven")
  } else {
    spinnerOneEl.classList.remove("seven")
  }
  if (valueTwo == 7) {
    spinnerTwoEl.classList.add("seven")
  } else {
    spinnerTwoEl.classList.remove("seven")
  }
  if (valueThree == 7) {
    spinnerThreeEl.classList.add("seven")
  } else {
    spinnerThreeEl.classList.remove("seven")
  }
  if (valueOne == 7 && valueTwo == 7 && valueThree == 7) {
    
  }

document.getElementById(yay)

}

spin()
