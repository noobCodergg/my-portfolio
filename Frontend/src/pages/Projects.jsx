import React from 'react'
import UpperSection from '../Components/UpperSection'
import ProjectShow from '../Components/ProjectShow'
import ScrollToTopButton from '../Components/ScrollToTop'

const Projects = () => {
  return (
    <div>
      <ScrollToTopButton/>
      <UpperSection title="My Projects"/>
      <ProjectShow/>
      
    </div>
  )
}

export default Projects
