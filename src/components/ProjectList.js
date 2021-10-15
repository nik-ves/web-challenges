import { useState } from "react";

import Project from "./Project";

import PROJECTS from "../data/Projects";

const ProjectList = () => {
  const [projects] = useState(PROJECTS);

  return (
    <div>
      <h2>Frontend Mentor Challenges</h2>
      <ul>
        {projects
          .filter((project) => project.challenge === "frontend-mentor")
          .map((project) => (
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
        {projects
          .filter((project) => project.challenge === "codewell")
          .map((project) => (
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
