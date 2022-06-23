const myProfile = {
    name: 'Ibrahima',
    age: 23
}

const teacherProfile = {
    name: 'Mohamed',
    age: 55
}

function primitiveMutate(primitive) {
    primitive++
    console.log(primitive)
}
let num = 4
primitiveMutate(num)

///////////////////////////////////////////////

function mutate(obj) {
    obj.age+++
    console.log(obj.age)
}


mutate(teacherProfile)
console.log(teacherProfile)



































// const myObject = {
//     'key1':{
//         'key3': 'Hello world',
//         key4 : 'Dada world',
//         'key5 & 6': 'Papi world'
//     } ,
//     'key2': 'Bbb',
//     key7: null,
//     key8: undefined,
//     key9: true
// }

// console.log(myObject['key1']);
// console.log(myObject['key1']['key4']);
// console.log(myObject.key1['key5 & 6']);


// ////////////////////////////////////////////////////////////////

// const result = 1 === '1'
// const right = 1 === 1

// console.log(result)    
// console.log(right)    

    
    // function breakNumber(number) {

    //     let evenNumber = []

    //         for (let i=0; i<20; i++) {
    //             if(i === number) {
    //                 break
    //         }

    //         if(i % 2 === 0){
    //             evenNumber.push(i)
    //         }
            
    //     }
    //         return evenNumber
    // }
    // console.log(breakNumber(10))

/////////////////////////////////////////////////////////////////

        // function skipNumbers(number) {

    //     let evenNumber = []

    //         for (let i=0; i<20; i++) {

    //             if(i % 2 === 1) {
    //             continue
    //         }
    //         if(i === number){
    //             continue
    //         }
    //         evenNumber.push(i)
    //     }
    //         return evenNumber
    // }
    // console.log(skipNumbers(20))
    // console.log(skipNumbers(2))

////////////////////////////////////////////////////////////

// function skipNumbers(number) {
//     let evenNumber = []
//     for (let i=0; i<20; i++) {
//         if (i%2 === 0 && i !== number){
//             evenNumber.push(i)
//         }
//     }
//     return evenNumber
//     }
//     console.log(skipNumbers(20))