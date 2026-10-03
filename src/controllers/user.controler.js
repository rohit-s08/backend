import { response } from "express"
import {asyncHandaler} from "../utils/asyncHandler.js"


const registerUser= asyncHandaler( async(req,res)=>{
    response.status(200).json({
        message:"ok"
    })
})



export {registerUser}