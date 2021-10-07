const Project = ({ name, githubLink, previewLink, imgPath }) => {
  const formatedName = (name) => {
    return name
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <li>
      <a href={previewLink} target="_blank">
        <img src={imgPath} alt={name} />
        <p>{formatedName(name)}</p>
      </a>

      <div className="links-container">
        <a href={githubLink} className="black" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a href={previewLink} className="black" target="_blank">
          <i className="fas fa-eye"></i>
        </a>
      </div>
    </li>
  );
};

export default Project;
