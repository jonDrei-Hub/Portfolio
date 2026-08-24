import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <main className="page">
      <h1>My Projects</h1>

      <div className="projects">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <Link to={`/projects/${project.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
