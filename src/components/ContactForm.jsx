import { useState } from "react";

const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setErrors((p) => ({ ...p, [e.target.name]: "" }));
    setNotice("");
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!isValidEmail(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setNotice("");

    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setNotice("Form Submitted");
        setForm((p) => ({ ...p, message: "Form Submitted" }));
      } else {
        const msg = await res.text().catch(() => "");
        setNotice(msg || "Submission failed. Please try again.");
      }
    } catch {
      setNotice("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {notice && (
        <div
          className={
            notice === "Form Submitted" ? "alert alert--success" : "alert alert--error"
          }
          role="status"
        >
          {notice}
        </div>
      )}

      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={form.name} onChange={onChange} placeholder="Enter your name" />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" value={form.email} onChange={onChange} placeholder="you@example.com" />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" value={form.phone} onChange={onChange} placeholder="9876543210" />
        {errors.phone && <p className="error">{errors.phone}</p>}
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} value={form.message} onChange={onChange} placeholder="Write your message" />
        {errors.message && <p className="error">{errors.message}</p>}
      </div>

      <button type="submit" className="btn" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
