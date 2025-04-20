import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectById } from '../Api/projectApi';
import UpperSection from '../Components/UpperSection';
import { FaJs, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import Contact from './Contact';

const techIcons = {
  JavaScript: <FaJs className="text-yellow-400 text-xl" />,
  React: <FaReact className="text-blue-400 text-xl" />,
  HTML: <FaHtml5 className="text-red-500 text-xl" />,
  CSS: <FaCss3Alt className="text-blue-600 text-xl" />,
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProject = async () => {
    try {
      const response = await getProjectById(projectId);
      setProject(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  if (loading) {
    return (
      <div className="p-6 md:p-8 max-w-5xl mx-auto text-center text-gray-500">
        Loading project...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="p-6 md:p-8 max-w-5xl mx-auto text-center text-red-500">
        Project not found.
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      <UpperSection title="Details" />

      {/* Hero Image */}
      <div className="px-4 sm:px-10 md:px-20 pt-6 md:pt-10">
        <motion.img
          src={project.images[0]}
          alt="Project Visual"
          className="w-full rounded-xl shadow-xl object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px] mx-auto"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-8 lg:px-12 xl:px-20 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{project.title}</h1>
            <p className="text-lg sm:text-xl text-[#FF014F]">{project.type}</p>
          </div>

          {/* Technologies */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <ul className="flex flex-wrap gap-3">
              {project.technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full text-sm font-medium"
                >
                  {techIcons[tech] || null}
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              {project.description}
            </p>
          </div>

          {/* Contact */}
          <Contact />
        </div>

        {/* Sticky Summary Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 bg-gray-900 rounded-2xl p-6 shadow-lg space-y-6 h-fit">
            <h2 className="text-lg sm:text-xl font-semibold">Project Summary</h2>
            <div>
              <p className="text-sm text-gray-400">Author</p>
              <p className="text-base font-medium">Muntasir Mahmud Niloy</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Date</p>
              <p className="text-base font-medium">12/8/2024</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Technologies</p>
              <p className="text-base font-medium">{project.technologies.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
