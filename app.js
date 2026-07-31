function saveToDb(data, success, failure){
    let internetSpeed = Math.floor(Math.randon()*10) + 1;
    if(internetSpeed>4){
        success();
    }
    else{
        failure();
    }
}

saveToDb(
    "apna college",
     ()=>{
        console.log("success : data saved");
        saveToDb(
            "hello world",
        () => {
            console.log("success2 : data2 saved");
            saveToDb(
                "shraddha",
                () => {
                    console.log("success3 : data3 saved");
                },
                () => {
                    console.log("weak connection");
                }
            )
        },
        () => {
            console.log("failure2 : weak connection");
        }
        )
    },
    () => {
        console.log("failure : weak connection");
    }

)

//this is callback hell as the data is saved only when the previous one is saved
