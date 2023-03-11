import Container from 'react-bootstrap/Container';
import '../assets/css/About.css';
import { useState } from "react";
import '../assets/css/Contact.css';

function Contact() {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmitForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputValidation = (e) => {
    e.target.reportValidity();
  }

  return (
    <Container fluid className="contactSection">
      <h1>Contact Me</h1>
      <div className="contactFlex">
        <div className="formFlex">
          <form>
            <div style={{ width: "55%" }} className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={formData.name}
                onBlur={inputValidation}
                onChange={handleInputChange}
                required
              />
            </div>

            <div style={{ width: "55%" }} className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onBlur={inputValidation}
                onChange={handleInputChange}
                required
              />
            </div>
            <div style={{ width: "55%" }} className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                rows="4"
                type="text"
                name="message"
                className="form-control"
                placeholder="Enter Your Message Here"
                value={formData.message}
                onBlur={inputValidation}
                onChange={handleInputChange}
                required
              />
            </div>
            <button className="contactButton" onClick={handleSubmitForm}>Submit</button>
          </form>
        </div>
        <div className="iconFlex">
          <a href="https://github.com/kcschaefs" target="_blank"><img className="contactGH" src="./images/github-mark-white.png" /></a>
          <a href="https://www.linkedin.com/in/kristen-schaefer-dev/" target="_blank"><img className="contactLI" src="./images/linkedin-logo.svg" /></a>
        </div>
      </div>
    </Container>
  );
}

export default Contact;