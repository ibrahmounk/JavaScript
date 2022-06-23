const bal = 11;
let total =  454;
let sum = 7;

// function getAgege(age) {
//     if(age > 18) {
//         return true
//     } else {
//         return false
//     }
// }

// function getAgege(age) {
//     if(age > 18) {
//         return true
//     } 
//         return false
// }

function getAgage(age, bribe, whitelisted) {
    if(!whitelisted){
        console.log('You are banned', whitelisted)
        return
    }
    if((age <= 18 && bribe > 100) || bribe > 500) {
        console.log('You pass')
        return
    
    } else if (age > 18) {
        console.log('He is above 18')
        return
    }else if (bribe <= 100) {
        console.log('This person is below 18')
    }
}

getAgage(100, 100, true)
// getAgage(100, 100, false)

// getAgage(100, 100, undefined)
// getAgage(100, 100, null)


// getAgage(100, 100, 0)




// else if(age > 18) {
//     console.log('This person is ' + age + ' years old')
//     return
// }else if(bribe > 100 ){
//     console.log('Congrats')
// }else{
//     console.log('This person is only ' + age + ' years old')
// }