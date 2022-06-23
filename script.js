const allList = document.querySelectorAll('ul li')

for (let i =0; i<allList.length; i++) {
    let affiche = allList[i]
    affiche.innerText = 'Voilà'
}

console.log(allList)