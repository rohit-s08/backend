import dotenv  from "dotenv"
import express from "express"
import connectDB from "./db/index.js"
dotenv.config()

const app= express()

 


connectDB()// because this fucntion return promise so we use .then and .catch for handaling promise
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
})
.catch((eror)=>{
    console.log("MONGODB CONNECTION FAILED !! ",eror)
})










// (async ()=>{
//     try{
//         await connect.mongoose(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("errror",(error)=>{
//             console.log("EROR", error)
//             throw error
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
//     } catch (error){
//         console.error("ERROR", error)
//         throw err
//     }
// })()