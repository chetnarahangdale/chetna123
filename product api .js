const express=require('express');
const app = express()
const { json } = require("express")

app.get("/about",(req,res)=>{

res.send("this is about")


})
app.use(express.json())

app.listen(3000,()=>{
console.log("sever is running")
})


let productlist=["oil","shoap"]

app.get  ("/productlist",(req,res)=>{
    res.send(productlist)
})