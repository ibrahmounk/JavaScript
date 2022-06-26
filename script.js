let decrementBtn = document.querySelector('#decrement')
const incrementBtn = document.querySelector('#increment')
const countCheck = document.getElementById('counter')
let countER = 0;



const decrementation = function() {
    countER--
    countCheck.innerText = countER
}

const clickIt = function() {
    countER++
    countCheck.innerText = countER
}

incrementBtn.addEventListener('click', clickIt)
decrementBtn.addEventListener('click', decrementation)



























// const allList = document.querySelectorAll('#incrementBtn')

// let counter = 0;

// function incrementCounter() {
//     const count = document.getElementById('counter')
//     counter++
//     console.log(count)

//     count.innerText = counter
// }

// document.addEventListener('click',incrementCounter)