// its just a method that create a rapper for a code of communicating server with database because we need to write again and again everytime for every controller when we want to talk or connect with datbase so with help of this method we just call this method by exporting and from using file will send the controller and this method will rap it 
const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>{
            next(err)
        })
    } 
}

export {asyncHandler}



// const asyncHandler=(func)=>async(req,res,next)=>{
//     try{
//         await func(req,res,next)
//     } catch(eror){
//         res.status(eror.code || 500).json({
//             success: false,
//             message:eror.message
//         })
//     }

// }