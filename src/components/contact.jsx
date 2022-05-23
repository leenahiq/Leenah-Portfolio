import "../components/contact.css";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail />
            <h4>Email</h4>
            <h5>Have you got some questions?</h5>
            <a href="leeangel_huzy@icloud.com" target="_blank" rel="noreferrer">
              send a message
            </a>
          </article>
          <article className="contact_option">
            <BsLinkedin />
            <h4>LinkedIn</h4>
            <h5>Stay connected or have a liitle chat!</h5>

            <a
              href="https://www.linkedin.com/messaging/"
              target="_blank"
              rel="noreferrer"
            >
              send a message
            </a>
          </article>
          <article className="contact_option">
            <BsTwitter />
            <h4>Twitter</h4>
            <h5>Follow me or drop me your message!</h5>
            <a
              href="https://twitter.com/messages"
              target="_blank"
              rel="noreferrer"
            >
              send a message
            </a>
          </article>
        </div>
        <form action="">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Message"
            required
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
