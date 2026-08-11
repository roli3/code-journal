//Axios - library to make HTTP request and uses fetch method internally

let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#output");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        console.log("error", e);
        return "no fact found";
    }
}

//code for dog images
let url2 = "https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click", async ()=>{
    let link = await getImage();
    console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link)
});
async function getImage(){
    try{
        let res = await axios.get(url2);
        // console.log(res.data.message);
        return res.data.message;
    }
    catch(e){
        console.log("error", e);
        return "no image found";
    }
}

//Axios : sending headers
const url3 = "https://icanhazdadjoke.com/";
async function getJokes(){
    try{
        const config = {headers: {Accept: "application/json"}};
        let res= await axios.get(url, config);
        console.log(res.data);
    }
    catch(err){
        console.log(err);
    }
}