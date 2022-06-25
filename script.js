// const incremente = document.querySelector('#incrementBtn')

// let counter = 0

// function incre() {
//     const counterEl = document.getElementById('counter')
//     counter++
//     counterEl.innerText = 'counter'
// }

// incremente.addEventListener('click', incre )



const allList = document.querySelectorAll('#incrementBtn')

let counter = 0;

function incrementCounter() {
    const count = document.getElementById('counter')
    counter++
    console.log(count)

    count.innerText = counter
}

document.addEventListener('click',incrementCounter)