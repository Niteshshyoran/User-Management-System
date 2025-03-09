const mongoose = require("mongoose");

const connectedDB = async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/Usermanagement")
            console.log("Connected to mongoDb")
    }catch(err){
        console.log(err)
    }
}
module.exports = {connectedDB}
