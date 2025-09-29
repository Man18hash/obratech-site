import { useState } from "react";
import emailjs from "@emailjs/browser";

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
      className="section-padding gradient-bg text-white text-center"
    >
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-300 mb-12">
            Ready to start your project? Get in touch with us today!
          </p>
          
          <form
            onSubmit={sendEmail}
            className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg text-brand-blue dark:text-white"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 dark:border-gray-600 p-4 rounded-lg text-sm md:text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 dark:border-gray-600 p-4 rounded-lg text-sm md:text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 dark:border-gray-600 p-4 rounded-lg text-sm md:text-base bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              required
            ></textarea>
            <button
              type="submit"
              className="btn-primary w-full text-lg py-4"
            >
              Send Message
            </button>
          </form>

          {status && (
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-lg">{status}</p>
            </div>
          )}

          <div className="mt-12 grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">📍 Location</h3>
              <p className="text-gray-300">Magapit, Lal-lo, Cagayan, Philippines</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">📞 Contact Info</h3>
              <p className="text-gray-300">obratech18@gmail.com</p>
              <p className="text-gray-300">09568618070</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
