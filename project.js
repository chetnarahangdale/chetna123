const express = require('express')
 const app = express()
 const mongoose= require('mongoose');
 const cors = require("cors")
 app.use(express.json())
 app.use(cors())


 mongoose.connect("mongodb+srv://chetnarahangdale7009_db_user:DVGK961GrR4OxjME@cluster0.ghovlma.mongodb.net/chetna")
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

  const itemSchema = new mongoose.Schema({
    name:String,
    

    price:Number
  });
   const Item = mongoose.model("Item", itemSchema);

   app.post("/addItem",(req,res)=>{
    let newItem = new Item(req.body)
    newItem.save()
    res.send(newItem);

   })

   app.get("/getproduct",async(req,res)=>{
    let item = await Item.find();
    res.send(item);
   })


   app.put("/updateprice/:id",async(req,res)=>{
      await Item.findByIdAndUpdate(req.params.id,{price: req.body.price});
      res.send("price update")
   })


   app.delete("/delete/:id",async(req,res)=>{
    await Item.findByIdAndDelete(req.params.id);
    res.send("Item delete")
   })

