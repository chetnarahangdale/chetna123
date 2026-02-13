 const express = require('express')
 const app = express()
 const mongoose= require('mongoose');
 const cors = require("cors")
 app.use(express.json())
 app.use(cors())

 mongoose.connect("mongodb://localhost:27017/")

 .then(()=>{
    console.log("connection succsessful")

})

.catch((err)=>{
    console.log("fail",err)
})

app.get("/home",(req,res)=>{

 res.send("this is home")

})

app.listen(3000,()=>{
 console.log("sever is running")
 })



const courseSchema = mongoose.Schema({
    course:String
})

const Course  = mongoose.model("course",courseSchema)

app.post("/addcourse",(req,res)=>{
    let newcourse  = new Course({course:req.body.course})
    newcourse.save()
    res.send(newcourse)
})



app.get("/getcourse",async(req,res)=>{
    let allcourse = await Course.find()
    res.send(allcourse)
    
})
 

app.put("/updatecourse/:id",async(req,res)=>{
    let id= req.params.id
    let newcourse = req.body.course
    let updatecourse =await Course.findByIdAndUpdate(id,{course:newcourse}) 
    res.send({
        message:"database update hai"
    })
})




app.delete("/deletecourse/:id", async (req, res) => {
    let id = req.params.id

    await Course.findByIdAndDelete(id)

    res.send({
        message: "Course delete ho gaya"
    })
})




