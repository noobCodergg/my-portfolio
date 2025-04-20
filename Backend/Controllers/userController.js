const user=require("../Models/userModel")
const mongoose = require("mongoose");

exports.createUser=async(req,res)=>{
  try{
    const {phone,email,result}=req.body
    console.log(phone,email,result)
    const response=await user.create({phone,email,result})
    res.status(200).json("Success")
  }catch(error){
    res.status(500).json("Failed")
  }
}

exports.checkUser=async(req,res)=>{
    try{
        const {phone}=req.params;
        console.log(phone)
        const response=await user.findOne({phone})
 
        if(response){
            res.status(200).json(true)
        }else{
            res.status(200).json(false)
        }
    }catch(error){
        res.status(500).json("Failed")
        console.log(error)
    }
}

exports.getJoinedRequestUserData = async (req, res) => {
  try {
    const result = await mongoose.connection.collection("requests").aggregate([
      {
        $lookup: {
          from: "users" ,             
          localField: "email",       
          foreignField: "email",    
          as: "userInfo"            
        }
      },
      { 
        $unwind: { 
          path: "$userInfo", 
          preserveNullAndEmptyArrays: true 
        } 
      },  
      {
        $project: {
          _id: 1,
          first_name: 1,
          last_name: 1,
          email: 1,
          phone: { $ifNull: ["$userInfo.phone", "N/A"] }, // Default "N/A" if phone doesn't exist
          result: { $ifNull: ["$userInfo.result", "N/A"] }, // Default "N/A" if result doesn't exist
          details: { $ifNull: ["$details", "N/A"] }, // Default "N/A" if details doesn't exist
          budget: { $ifNull: ["$budget", "N/A"] }, // Default "N/A" if budget doesn't exist
          status: 1
        }
      }
    ]).toArray();

    res.status(200).json(result);
  } catch (error) {
    console.error("Aggregation error:", error);
    res.status(500).json({ message: "Server Error", error });
  }
};


exports.getUsers=async(req,res)=>{
   try{
    const response = await user.find();
    res.status(200).json(response)
   }catch(error){
    res.status(500).json("Failed")
   }
}

