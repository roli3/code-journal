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
    .then((result)=>{
        console.log("data3 saved");
        console.log("result of promise",result);
    })
    .catch((error)=>{
        console.log("promise rejected");
        console.log("error of promise",error);
    });
//__________________________________________________________________________________________________________________________________________________________________________________

//Javascript unit 12
//async functions
// async and await keywords
//all async functions return a promise

async function greet(){
    // throw "some random error";
    return "hello";
}

greet()
.then(()=>{
    console.log("promise was successful");

})
.catch((err)=>{
    console.log("promise was rejected");
});
//___________________________________________________________________________________________________________________________________________________________________________________

//await keyword - pauses the execution of it's surrounding async function until the promise is settled (resolved or rejected).
function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        }, 1000);
    });
}
async function demo(){
   await getNum();
   await getNum();
   await getNum();
}
//_________________________________________________________________________________________________________________________________________

//await keyword- handling rejections with await

h1 = document.querySelector("h1");
function changeColor(color, delay){

    return new Promise((resolve, reject)=>){
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(`coloe changed to ${color}!`);
            resolve("color changed");
        }, delay);
    }
}
async function demo2(){
    try{
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
    }
    catch(err){

        console.log("error caught");
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new number = ", a+3);

}