import React from "react";
import "./help.css";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Help = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6bt2jci",
      "template_qnex8b9",
      form.current,
      "-St_kU3frs1ann--O"
    );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>

      <div className="containerr contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder=" Full Name" required />
          <input type="text" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            className="textttt"
          ></textarea>
          <button type="submit" className="help_btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Help;
