import React, { useState } from 'react';
import { postProject } from '../Api/projectApi';

const UploadProjects = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    github: '',
    live: '',
    type: 'Frontend',
    technologies: [''], // initial tech input
    images: [] // base64 strings
  });

  // Handle normal inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle technology input changes
  const handleTechChange = (index, value) => {
    const updatedTech = [...formData.technologies];
    updatedTech[index] = value;
    setFormData({ ...formData, technologies: updatedTech });
  };

  // Add new tech input
  const handleAddTech = () => {
    setFormData({ ...formData, technologies: [...formData.technologies, ''] });
  };

  // Convert file to base64
  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

  // Handle file input
  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    const base64Files = await Promise.all(files.map(file => convertToBase64(file)));
    setFormData({ ...formData, images: base64Files });
  };

  // Handle form submit
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Submitting project:', formData);
    try{
        const response=await postProject(formData)
        console.log(response)
    }catch(error){
        console.log(error)
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Upload New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title */}
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
        </div>

        {/* GitHub */}
        <div>
          <label className="block text-sm font-medium">GitHub Link</label>
          <input
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
        </div>

        {/* Live Site */}
        <div>
          <label className="block text-sm font-medium">Live Site Link</label>
          <input
            type="url"
            name="live"
            value={formData.live}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          />
        </div>

        {/* Project Type */}
        <div>
          <label className="block text-sm font-medium">Project Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md"
          >
            <option value="Frontend">Frontend</option>
            <option value="Fullstack">Fullstack</option>
          </select>
        </div>

        {/* Technologies Used */}
        <div>
          <label className="block text-sm font-medium mb-1">Technologies Used</label>
          {formData.technologies.map((tech, index) => (
            <input
              key={index}
              type="text"
              value={tech}
              onChange={(e) => handleTechChange(index, e.target.value)}
              className="block w-full px-3 py-2 mb-2 border rounded-md"
              placeholder={`Technology ${index + 1}`}
            />
          ))}
          <button
            type="button"
            onClick={handleAddTech}
            className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 text-sm"
          >
            + Add Technology
          </button>
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium">Upload Images (max: 3)</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="mt-1"
          />
          <div className="mt-2 flex gap-2 flex-wrap">
            {formData.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`upload-${idx}`}
                className="w-20 h-20 object-cover rounded border"
              />
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default UploadProjects;
