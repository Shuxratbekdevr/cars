const express = require("express");
const dotenv = require("dotenv").config()


const app = express();




app.get("/", (req ,res) => {
    
    res.send("hello word")
})




const PORT = process.env.PORT || 5000

app.listen(PORT , (err)=>{
    console.log(err);
    console.log("server running http://localhost:" + PORT);
    
    
})