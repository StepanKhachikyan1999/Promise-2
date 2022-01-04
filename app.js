// Promises

const userInfo = "https://jsonplaceholder.typicode.com/users"

function getUserData() {
    return fetch(userInfo)
    .then(function(res) {
        return res.json()
    })
}

getUserData()

getUserData()
.then(function(info) {
    console.log(info);
})


let user1 = getUserData()
.then(function(info) {
    info.forEach((usersInfo) => {
        console.log(usersInfo);
        document.write(usersInfo.name + "</br>" )
    })
})
.catch(function(err) {
    console.log(err);
})

//----------------------------------------------------------------  2

function myPromise() {
    return new Promise(function(resolve,reject) {
        resolve(5)
    })
}

myPromise()
.then(function(res) {
    console.log(res);
})


//------------------------------------------------------------------  3


function myPromise() {
    return new Promise(function(resolve,reject) {
        resolve(5)
    })
}

console.log(1);

myPromise()
.then(function() {
   console.log(2);
})

console.log(3);

//--------------------------------------------------------------------


