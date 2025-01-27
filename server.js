const express = require('express')
const app = express()


app.get("/signup",(req,res)=>{
    const {Username,Email,Password,DOB} = req.query
    
    if(!Username){
        res.send("Username cannot be empty")
    }
    if(!Email){
        res.send("Email cannot be empty")
    }
    if(!Password){
        res.send("Password cannot be empty")
    }
    if(Password.length<8 || Password.length>16){
        res.send("Password length should be greater than 8 or less than or equal to 16")
    }
    if(!DOB){
        res.send("Date of Birth cannot be empty")
    }
    
    res.json({
        Username,Email,Password,DOB
    })
})


const port = 3000
app.listen(port,()=>{
    console.log("Running on Port 3000")
})