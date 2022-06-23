let myFriend = []

function addThem(friends) {
    // myFriend.push(friends)
    myFriend.unshift(friends)
    console.log(myFriend)
}
for (let i=0; i<10; i++) {
    myFriend.push(i)
}

console.log(myFriend)
