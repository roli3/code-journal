// function saveToDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.randon()*10) + 1;
//     if(internetSpeed>4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// saveToDb(
//     "apna college",
//      ()=>{
//         console.log("success : data saved");
//         saveToDb(
//             "hello world",
//         () => {
//             console.log("success2 : data2 saved");
//             saveToDb(
//                 "shraddha",
//                 () => {
//                     console.log("success3 : data3 saved");
//                 },
//                 () => {
//                     console.log("weak connection");
//                 }
//             )
//         },
//         () => {
//             console.log("failure2 : weak connection");
//         }
//         )
//     },
//     () => {
//         console.log("failure : weak connection");
//     }

// )

//this is callback hell as the data is saved only when the previous one is saved
//_________________________________________________________________________________________________________________________________________________________________________

// Promises: the promise object represents the eventual completion (or failure) of an asynchronous operation and it's resulting value
//promise is an object which has: success callback i.e. resolve and failure callback i.e. reject

function saveToDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random()*10) + 1;
        if(internetSpeed>4){
            resolve("success : data was saved");
        }
        else{
            reject("failure : weak connection");
        }
    })
}

saveToDb("apna college");

//promise state : 1) pending  2) rejected(error) 3)  fulfilled(resolved)
//____________________________________________________________________________________________________________________________________________________________________________

//Promises - then() method and catch()  method
// if we want to do some work after the promise is fulfilled  then  we  use then()  and when  we want to catch the error caused by reject after the promise is rejected then we use catch()

let req  =  saveToDb("apna college");
console.log(req);
req
    .then(() =>{
        console.log("promise was resolved");
        console.log(req)
    })
    .catch(()=>{
        console.log("promise was rejected");
        console.log(req);
    });
//___________________________________________________________________________________________________________________________________________________________________________________________________________

//Promise chaining
saveToDb("apna college")
    .then(()=>{
        console.log("data1 saved. promise was resolved");
        saveToDb("hello world")
            .then(()=>{
                console.log("data2 saved");
                saveToDb("shraddha")
                    .then(()=>{
                        console.log("data3 saved");
                    })
        });
    })
    .catch(()=>{
        console.log("promise was rejected");
    })// this looks like callback hell only
//there's only single catch is required for multiple then()

//improved version of promise chaining which is more readable
saveToDb("apna college")
    .then(()=>{
        console.log("data1 saved");
        return saveToDb("hello world");
    })
    .then(()=>{
        console.log("data2 saved");
        return saveToDb("shraddha");
    })
    .theb(()=>{
        console.log("data3 saved");
    })
    .catch(()=>{
        console.log("promise rejected");
    });
//now this code is doing the same thing as the previous callback hell one
//___________________________________________________________________________________________________________________________________________________________________________________________

//Promises are rejected and resolved with some data(valid results or errors)
saveToDb("apna college")
    .then((result)=>{
        console.log("data1 saved");
        console.log("result of promise",result);
        return saveToDb("hello world");
    })
    .then((result)=>{
        console.log("data2 saved");
        console.log("result of promise",result);
        return saveToDb("shraddha");
    })
    .theb((result)=>{
        console.log("data3 saved");
        console.log("result of promise",result);
    })
    .catch((error)=>{
        console.log("promise rejected");
        console.log("error of promise",error);
    });
//__________________________________________________________________________________________________________________________________________________________________________________

