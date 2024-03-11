import  Input from "../../common/input/input";
import { useState } from "react";
import css from "./styled.module.scss"
import Button  from "../../common/button";
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
    <div className={css.contactContainer}>
      <div className={css.contactContainerInfo}>
        <h2 className={css.contactContainerTitle}>Let's Connect</h2>
        <p className={css.paragraph}>
          I'm a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </p>
      </div>
      <section className={css.contactContainerSection}>
        <div className={css.sectionLeft}>
          <form className={css.formContact} onSubmit={handleSubmit}>
            <Input  variant={'secondary'}
              name="firstName" type={'text'}
              placeholder={"First Name"}
              onChange={handleChange}
            />
            <Input  variant={'secondary'}
              name="lastName" type={'text'}
              placeholder={"Last Name"}
              onChange={handleChange}
            />
            <Input  variant={'secondary'} type={'email'}
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
            <Button type={"submit"} title={"Send"}  variant={'secondary'}/>
          </form>
        </div>
        <div className={css.sectionRight}>
          <div className={css.sectionTop}>
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
          <div className={css.sectionBottom}>
          <span><br/>Email <br/> info@mysite.com</span>
      
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
