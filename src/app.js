import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"




const app=express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))


// configuration for accepting varioud form of data such as json url and some data that can be accesss publically
app.use(express.json({limit: "16kb"}))

app.use(express.urlencoded({extended: true,limit:"16kb"}))

app.use(express.static("public"))
// configuration for access users browser cookies and perform CRUD operation on it 
app.use(cookieParser())



// routes import

import userRouter from "./routes/user.routes.js"


// routes decleration 
app.use('/api/v1/users', userRouter)



export { app }