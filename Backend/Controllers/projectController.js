const project = require('../Models/projectModel');

exports.uploadProject = async (req, res) => {
  try {
    
    const {
      title,
      description,
      github,
      live,
      type,
      technologies,
      images,
    } = req.body.formData; // properly destructuring from formData
   
    const newProject = await project.create({
      title,
      description,
      github,
      live,
      type,
      technologies,
      images,
    });

    console.log(newProject)
    res.status(201).json({ message: "Project uploaded successfully!" });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};


exports.getProjects=async(req,res)=>{
    try{
        const response=await project.find()
        res.status(200).json(response)
    }catch(error){
        console.log(error)
    }
}

exports.getProjectById=async(req,res)=>{
    try{
        const {projectId}=req.params;

        const response=await project.findById({_id:projectId})
        res.status(200).json(response)
    }catch(error){
        console.log(error)
    }
}
