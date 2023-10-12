const express = require("express")
const app = express()



app.get("/",(req,res)=>{
    res.send("Hello to you!")
})




app.listen(4000,()=>{
    console.log("Listening on 4000");
})