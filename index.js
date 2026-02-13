const express=require('express');
const cors = require('cors');
const app = express()

// mongoose mongoose.connection

const mongoose =require('mongoose')

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://chetnarahangdale7009_db_user:DVGK961GrR4OxjME@cluster0.ghovlma.mongodb.net/chetna")

.then(()=>{
    console.log("connection ho gys")

})

.catch((err)=>{
    console.log("fail",err)
})

// end

 app.get("/home",(req,res)=>{

 res.send("this is home")

})
 app.get("/about",(req,res)=>{

res.send("this is about")


 })

 app.listen(process.env.PORT || 3000,()=>{
 console.log("sever is running")
 })



// // day2

// let studentlist=["prachi","om"]


// app.get ("/studata",(req,res)=>{
//     res.send(studentlist)
// })

//  app.post ("/addstu",(req,res)=>

//  {
//      let newstu = req.body.name
//     studentlist.push(newstu)
//      res.send(studentlist)
//  })



// //  dayy 3


// // isme kisis index number per value add kiye hai
// app.put("/update/:id",(req,res)=>{
//     let nawname=req.body.name
//     let id = req.params.id

//     studentlist[id]=nawname

//     res.send(studentlist)
// })


// // isme kisi index se element delete hoga
// app.delete("/delete/:id",(req,res)=>{

//     let id= Number(req.params.id)
//     studentlist=studentlist.filter((ele,index)=>{
//         return index !== id
//     })
//     res.send(studentlist)

// })



// crud
// create read update delete
// get -> read
// post-> create

// ----------------------------

// put-> update

// delete -> delete




// day4      isee compass me dekhte hyyy 

const studentSchema = mongoose.Schema({
    name:String
})
const Student = mongoose.model("student",studentSchema)

app.post("/addstudent",(req,res)=>{
    let newstu= new Student({name:req.body.name})
    newstu.save()
    res.send(newstu)
})

// puri list read krna

app.get("/getstudent",async(req,res)=>{
    let allstu = await Student.find()
    res.send(allstu)
})



// day5

// phle check krenge data upadte hua ki nhi fir get ko run krenge toh vha name show hoga
// update ke sath id bhii dena  hoga 

app.put("/updatestu/:id",async(req,res)=>{
    let id= req.params.id
    let newstu = req.body.name
    let updatestu =await Student.findByIdAndUpdate(id,{name:newstu}) 
    res.send({
        message:"database update"
    })
})



app.delete("/deletestu/:id",async(req,res)=>{
    let id = req.params.id
    let deletestu = await Student.findByIdAndDelete(id)
    res.send({
        message:"student data deleted"
    })
})



// ==================== PRODUCT INVENTORY ROUTES (for project.html) ====================

// Product Schema
const productSchema = mongoose.Schema({
    name: String,
    price: { type: Number, default: 0 }
})
const Product = mongoose.model("product", productSchema)

// Add Product
app.post("/addItem", async(req,res)=>{
    let newProduct = new Product({name:req.body.name, price:req.body.price})
    await newProduct.save()
    res.send(newProduct)
})

// Get All Products
app.get("/getproduct", async(req,res)=>{
    let allProducts = await Product.find()
    res.send(allProducts)
})

// Update Product Price
app.put("/updateprice/:id", async(req,res)=>{
    let id = req.params.id
    let newPrice = req.body.price
    let updatedProduct = await Product.findByIdAndUpdate(id, {price:newPrice}, {new:true})
    res.send({
        message:"price updated",
        data: updatedProduct
    })
})

// Delete Product
app.delete("/delete/:id", async(req,res)=>{
    let id = req.params.id
    let deletedProduct = await Product.findByIdAndDelete(id)
    res.send({
        message:"product deleted",
        data: deletedProduct
    })
})

// day 6








