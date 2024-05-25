const express = require('express')
const app = express()
const path = require('path')


app.get("/", (req, res ,next)=>{
    res.status(200).json({
        success : true,
        message : "Welcome to the API"
    })
})



app.use(express.static(path.join(__dirname, "./frontend/build/index.html")))
app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "./frontend/build/index.html"))
})


module.exports = app;