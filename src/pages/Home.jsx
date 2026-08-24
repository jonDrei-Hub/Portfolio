import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="page">
      <h1>Hello, I'm John Andrei</h1>

      <h2>Student and Aspiring Developer</h2>

      <p>
        Welcome to my personal portfolio. I am a student interested in software
        development, web development, and technology.
      </p>

      <p>
        This website contains some of my school projects and programming
        activities.
      </p>

      <Link to="/projects" className="button">
        View My Projects
      </Link>
    </main>
  );
}
