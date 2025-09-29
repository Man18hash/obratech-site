import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [status, setStatus] = useState("");

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_25hs7vk",      // ✅ Your Service ID
        "template_jdb3gnv",     // ✅ Your Template ID
        e.target,               // ✅ Form reference
        "qT6u95lFonsUhxPF6"     // ✅ Your Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  }

  return (
    <section
      id="contact"
      className="py-20 bg-brand-blue text-white text-center px-6"
    >
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form
        onSubmit={sendEmail}
        className="max-w-xl mx-auto space-y-4 bg-white p-4 md:p-6 rounded-xl text-brand-blue"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full border p-3 rounded text-sm md:text-base"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3 rounded text-sm md:text-base"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="4"
          className="w-full border p-3 rounded text-sm md:text-base"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-brand-blue text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-blue-800"
        >
          Send Message
        </button>
      </form>

      {status && <p className="mt-4">{status}</p>}

      <p className="mt-6 text-gray-200">
        📍 Location: Magapit, Lal-lo, Cagayan, Philippines
      </p>
    </section>
  );
}
