const prize = require("../Models/prizeModel");

exports.postPrize = async (req, res) => {
  try {
    const { name } = req.body;

    const response = await prize.create({ name:name,status:false });
    res.status(200).json("Success");
  } catch (error) {
    res.status(500).json("Failed");
  }
};


exports.getPrize=async(req,res)=>{
    try{
        const response=await prize.find()
        res.status(200).json(response)
    }catch(error){
        res.status(500).json("Failed")
    }
}




exports.updatePrize = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedPrize = await prize.findByIdAndUpdate(
      id,
      { status: !status }, // assuming field name in model is isActive
      { new: true }
    );

    if (!updatedPrize) {
      return res.status(404).json({ message: 'Prize not found' });
    }

    res.status(200).json("Success");
  } catch (error) {
    res.status(500).json("Failed");
  }
};

