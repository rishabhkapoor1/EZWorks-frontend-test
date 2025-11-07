import ContactForm from "./components/ContactForm";
import "./index.css";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="page">
      {/* ✅ Navbar at the top */}
      <Navbar />

      {/* ✅ Contact Section */}
      <section className="hero" id="contact">
        <div className="hero__content">
          {/* Left Side */}
          <div className="hero__left">
            <h2>Every frame begins with a thought.</h2>
            <p>
              Share your vision, and we’ll help you bring it to life.
              <br />
              Let’s create stories worth watching.
            </p>
          </div>

          {/* Right Side */}
          <div className="hero__right">
            <h1>Join the Story</h1>
            <p>Ready to bring your vision to life? Let’s talk.</p>
            <ContactForm />

            {/* ✅ Contact Info Below Form */}
            <div className="contact-details">
              <span>vfilms@gmail.com</span>
              <span> | </span>
              <span>+91 98736 84567</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
