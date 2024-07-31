const mongoose = require("mongoose");
const express =require("express")
const cors= require("cors")
let app = express()
app.use(cors())
let empolyeeSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    department: String,
    image: String,
    cars: String,
    country: String,
  });
  let Employee= new mongoose.model("employee",empolyeeSchema,"detailsofemployees")
  
app.listen(2387,()=>{
    console.log(`2387 is listening.....`)
})
app.get("/employedetails", async (req,res)=>{
    let employeData= await Employee.find().distinct("gender")
    //.sort("department -cars")
    //.select("-first_name ")
    //.or([{country:"china "},{gender:"Female"},{age:{$gte:20,$lte:68}}])
    //.and([{country:"Brazil"},{gender:"Male"}])
    //.limit(50).skip(10)
    res.json(employeData)
})
let connectToDataBase = () => {
  try {
    mongoose.connect(
      "mongodb+srv://pavanajjarapu:pavan@findmethod.sziutcn.mongodb.net/DummyData?retryWrites=true&w=majority&appName=findmethod"
    );
    console.log(`connected successfully to DB`);
  } catch (error) {
    console.log(`not connected to DB`);
    console.log(error);
  }
};
connectToDataBase();
