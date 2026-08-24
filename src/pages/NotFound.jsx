import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="page">
      <h1>404 — Page Not Found</h1>

      <p>Sorry, the page you are looking for does not exist.</p>

      <Link to="/">Back to Home</Link>
    </main>
  );
}
