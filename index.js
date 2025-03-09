const express = require("express");
const {connectedDB} = require("./db.config");
const { userRouter } = require("./routes/user.routes");

const app = express()

app.use(express.json())

app.use("/users", userRouter)


app.listen(8080, ()=>{
    connectedDB()
    console.log("server is running at http://localhost:8080")
})