import ContactForm from "./components/ContactForm";
import "./index.css";
import Navbar from "./components/Navbar";
import useScrollReveal from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal(); // ✅ activates the scroll reveal

  return (
    <main className="page">
      <Navbar />

      {/* ✅ Hero Section */}
      <section className="hero reveal" id="contact">
        <div className="hero__content">
          {/* Left Side */}
          <div className="hero__left reveal">
            <h2>🎬 Crafting Emotions, One Frame at a Time</h2>
            <p>
              At <strong>V Films</strong>, imagination meets precision.
              <br />
              Every idea you share becomes a story that moves hearts, inspires
              minds, and lives beyond the screen.
            </p>
          </div>

          {/* Right Side */}
          <div className="hero__right reveal">
            <h1>✨ Let’s Turn Your Vision Into a Masterpiece</h1>
            <p>
              Whether it’s a concept, a dream, or a spark of inspiration — we’ll
              help you shape it into something extraordinary.
            </p>

            {/* ✅ Contact Form */}
            <ContactForm />

            {/* ✅ Contact Info */}
            <div className="contact-details">
              <span>vfilms@gmail.com</span>
              <span> | </span>
              <span>+91 987885689</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
