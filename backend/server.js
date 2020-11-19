const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app=express()

app.use(cors())
app.use(express.json())

// mongoDB connection
mongoose.connect('mongodb://localhost:27017/ExerciseApp', {useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true})
const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("MongoDB database connection established successfully")
})

// setting up routers for users and exercises
const exercisesRouter=require("./routes/exercises")
const usersRouter=require("./routes/users")

app.use("/exercises",exercisesRouter)
app.use("/users",usersRouter)

// adding a listener to the port 5000
app.listen(5000,()=>{
    console.log("server is running on port 5000")
})