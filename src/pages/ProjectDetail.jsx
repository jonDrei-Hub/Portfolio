import { useParams } from "react-router-dom";
import { projects } from "../data/Projects";

export default function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find((project) => project.id === Number(id));

  if (!project) {
    return (
      <main className="page">
        <h1>Project Not Found</h1>

        <p>Sorry, the project you are looking for does not exist.</p>
      </main>
    );
  }

  return (
    <main className="page">
      <h1>{project.title}</h1>

      <p>{project.details}</p>

      <h2>Technologies</h2>

      <ul>
        {project.technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </main>
  );
}
