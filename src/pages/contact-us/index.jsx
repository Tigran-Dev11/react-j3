import { InputMessage } from "../../common/input/input";
import "./style.css";
import { useState } from "react";

import ButtonForSection from "../../common/button";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-container-info">
        <h2 className="contact-container-title">Let's Connect</h2>
        <p className="paragraph">
          I'm a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </p>
      </div>
      <section className="contact-container-section">
        <div className="section-left">
          <form className="form-contact" onSubmit={handleSubmit}>
            <InputMessage
              name="firstName"
              placeholder={"First Name"}
              onChange={handleChange}
            />
            <InputMessage
              name="lastName"
              placeholder={"Last Name"}
              onChange={handleChange}
            />
            <InputMessage
              name="email"
              placeholder={"Email"}
              onChange={handleChange}
            />
            <textarea
              name="message"
              id="text-area"
              cols="31"
              rows="5"
              placeholder="Message"
              onChange={handleChange}
            ></textarea>
            <ButtonForSection type={"submit"} title={"Send"} />
          </form>
        </div>
        <div className="section-right">
          <div className="section-top">
            <span>
              Address <br /> 500 Terry Francine St.
              <br /> San Francisco, CA 94158
            </span>
            <span>
              <br />
              Phone <br />
              123-456-7890
            </span>
          </div>
          <div className="section-bottom">
          <span><br/>Email <br/> info@mysite.com</span>
      
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
