let decrementBtn = document.querySelector('#decrement')
const incrementBtn = document.querySelector('#increment')
const countCheck = document.getElementById('counter')
let countER = 0;
const ulElement = document.getElementById('itemList')



        const clickIt = function() {

        countER++
        countCheck.innerText = countER

        const li = document.createElement('li')
        li.innerHTML = ' <em>Sentence</em> ' + countER

        ulElement.appendChild(li)
    }


const decrementation = function() {
    countER--
    countCheck.innerText = countER
}

incrementBtn.addEventListener('click', clickIt)
decrementBtn.addEventListener('click', decrementation)
