import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-section">
      <h2>Boite à question</h2>
      <div className="border" />
      <form
        action="http://localhost:3000"
        method="post"
        className="contact-form"
      >
        <div className="your-name">
          <input
            type="text"
            className="contact-form-text"
            placeholder="Votre nom"
            name="yourname"
            required
          />
        </div>
        <div className="your-mail">
          <input
            type="email"
            className="contact-form-text"
            placeholder="Votre email"
            name="youremail"
            required
          />
        </div>
        <div className="subject">
          <input
            type="text"
            className="contact-form-text"
            name="yoursubject"
            placeholder="Sujet"
            required
          />
        </div>
        <div className="message">
          <textarea
            className="contact-form-message"
            placeholder="Votre message"
            name="yourmessage"
          />
        </div>
        <div className="bottom">
          <input
            type="submit"
            id="form-submit"
            className="contact-form-btn"
            value="Envoyer"
            required
          />
        </div>
      </form>
    </div>
  );
}
