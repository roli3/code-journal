const express = require("express");
const app = express();

let port = 3000;
app.listen(port, () =>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res) =>{
//     // console.log(req);
//     console.log("request received");
//     // res.send("this is a basic response");   //sending a response 
//     res.send({
//         name: "apple",
//         color: "red",      //this js object will be converted into json format
//     });

//     // let code = "<h1>Fruits</h1> <ul><li>apple</li><li>mango</li><li>orange</li></ul>";
//     // res.send(code);       #response in form of html
// });

//Routing - it is a process of selecting a path for traffic in a network or b/w or access multiple networks
app.get("/", (req, res) =>{
    res.send("you contacted root path");
});
app.get("apple", (req, res) =>{
    res.send("you contacted apple path");
});
app.get("orange", (req, res) =>{
    res.send("you contacted orange path");
});
app.get("*", (rq,res)=>{
    res.send("this path does not exist");
});  //this is a custom response
app.post("/",(req, res)=>{
    res.send("you contacted a post request on root path");
});


//Path parameters 
app.get("/:username/:id",(req,res)=>{
    // console.log(req.params);
    let {username, id} = req.params;
    res.send(`welcome to the page of @${username}`);
});

//query strings
app.get("/search", (req, res)=>{
    console.log(req.query);
    res.send("no results");
});