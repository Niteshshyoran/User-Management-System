const express = require("express")
const bcrypt = require("bcrypt")
const {userModel} = require("../models/user.model")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const userRouter = express.Router()

userRouter.post("/",async(req,res)=>{
    const {name,email,pass}=req.body
    try{
        bcrypt.hash(pass, Number(process.env.SALT_ROUNDS), async(err, hash)=> {
            if(err){
                res.json({err})
            }else{
                const newUser = new userModel({name, email, pass:hash})
                await newUser.save()
                res.json({msg:"signup sucessfull"})
            }
        });
    }catch(error){
        res.json(error)
    }
})

userRouter.post("/login", async(req,res)=>{
    const{email,pass}=req.body
    try{
        if(result){
            
        }else{
            res.json({error})
        }
    }catch(error){
        res.json({error})
    }
})





module.exports = {userRouter}