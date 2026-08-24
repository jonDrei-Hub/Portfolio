export default function Contact() {
  return (
    <main className="page">
      <h1>Contact Me</h1>

      <p>Email: your-email@example.com</p>

      <form>
        <label>
          Name:
          <input type="text" />
        </label>

        <br />

        <label>
          Email:
          <input type="email" />
        </label>

        <br />

        <label>
          Message:
          <textarea></textarea>
        </label>

        <br />

        <button type="button">Send Message</button>
      </form>
    </main>
  );
}
