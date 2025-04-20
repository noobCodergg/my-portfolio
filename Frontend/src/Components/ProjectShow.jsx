import React,{useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import { getProjects } from '../Api/projectApi';
import { Link } from 'react-router-dom';


const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
    },
  }),
};

const ProjectShow = () => {
  const [projects,setProjects]=useState([])

  const fetchProjects=async()=>{
    try{
      const response=await getProjects();
      console.log(response)
      setProjects(response.data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
     fetchProjects()
  },[])
  return (
    <div className="bg-black py-20 px-6">
     
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg border border-text1 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="h-56 overflow-hidden">
              <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <Link to={`/detail/${project._id}`}
                href={project.link}
                className="inline-block text-text1 font-semibold hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShow;

