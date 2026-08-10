//API(Application Programming Interface) - (it acts like a waiter) APIs return some data in format of JSON and not in the form of {html,css,js}

//JSON - Javascript Object Notation 
//JSON is not JS object
//accessing data from JSON:-
//1) JSON.parse(data) method
//to parse a string data into a js object
//2)JSON.stringify(json) method
//to parse a js object data into JSON

//Testing API requests:-
//tools: hoppscoth, postman

//AJAX - Asynchronous JavaScript and XML

//HTTPS Verbs - e.g. GET, POST, DELETE

//Status code:-
//200-299 - ok(succesfull response)
//300-399 - redirection messages
//400 - bad request
//404- not found
//500-599 - internal server error response
//400-499 - client error responses
//100-190 - informational responses

//add information in URLs (query string)
//https://www.google.com/search?q-harry+potter   => here q = key and harry+potter =  value


let url = "https://catfact.ninja/fact";
fetch(url)  //fetch method returns a promise
.then((res)=>{
    console.log(res);
    res.json().then((data)=>{
        console.log(data);
    });    //res.json() method also returns a method
})
.catch((err)=>{
    console.log("error--", err);
});



//using fetch with async and await
async function getFacts(){
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
    }
    catch(err){
        console.log("error", err);
    }

}