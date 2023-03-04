import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_2y2udfr",
      "template_ufkco2y",
      form.current,
      "Hfse15kD6Et74DJF5"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>S Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>suresh130301@gmail.com</h5>
            <a href="mailto:suresh130301@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Sri Suresh</h5>
            <a
              href="https://m.facebook.com/messages/?entrypoint=jewel&eav=AfZjDBjqEDDXEJFAHSWrJ1l1JMZoIyA6Dxtp7kZXJ-ycsowOio7fzi9eBGErrdTwmjI&paipv=0&no_hist=1"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 7397660373</h5>
            <a
              href="http://api.whatsapp.com/send?code=+91&phone=7397660373"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/*End Of Contact Options*/}
        {/* npm install emailjs-com --save for mail*/}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
