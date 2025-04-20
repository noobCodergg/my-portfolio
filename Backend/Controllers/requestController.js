const request=require('../Models/requestModel')


exports.postRequest=async(req,res)=>{
    console.log("hi")
    try{
        const {formData}=req.body
        console.log("this is formdata",formData)
        const response=await request.create({first_name:formData.first_name,last_name:formData.last_name,email:formData.email,budget:formData.budget,details:formData.details})
        res.status(200).json("Success")
    }catch(error){
        console.log(error)
        res.status(500).json("Failed")
    }
}


exports.updateStatus=async(req,res)=>{
    try{
        const {requestId}=req.params;
        console.log(requestId)
        const response=await request.updateOne({_id:requestId,status:true})
        res.status(200).json("Success")
    }catch(error){
        console.log(error)
    }
}
