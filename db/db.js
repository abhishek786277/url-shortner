const mongoose = require("mongoose")

const connecttodatabase = async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/shortURL")
    console.log("mongo connected")
    }

module.exports={
    connecttodatabase,
};