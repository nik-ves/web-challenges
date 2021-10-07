import { useState } from "react";

import Project from "./Project";
import FRONTEND_MENTOR_PROJECTS from "../data/FrontendMentorProjects";
import CODEWELL_PROJECTS from "../data/CodewellProjects";

const ProjectList = () => {
  const [frontendMentorProjects, setFrontendMentorProjects] = useState(
    FRONTEND_MENTOR_PROJECTS
  );
  const [codewellProjects, setCodewellProjects] = useState(CODEWELL_PROJECTS);

  return (
    <div>
      <h2>Frontend Mentor Challenges</h2>

      <ul>
        {frontendMentorProjects.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            githubLink={project.githubLink}
            previewLink={project.previewLink}
            imgPath={project.imgPath}
          />
        ))}
      </ul>
      
      <h2>Codewell Challenges</h2>
      <ul>
        {codewellProjects.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            githubLink={project.githubLink}
            previewLink={project.previewLink}
            imgPath={project.imgPath}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
