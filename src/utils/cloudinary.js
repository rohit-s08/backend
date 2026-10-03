import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})


const upload_on_cloudinary=async(localfilepath)=>{
    try{
        if(!localfilepath) return null
        //upload the file on the cloudinary
        const response=await cloudinary.uploader.upload(localfilepath,{
            resource_type:"auto"
        })
        //file has been uploaded succesfully
        console.log("File is uploaded cloudinary",response.url)
        return response


    } catch(eror){
        fs.unlinkSync(localfilepath)
        //remove the localy saved temporary file as the uplaod operation got failed
        return null
    }
}

export {upload_on_cloudinary}