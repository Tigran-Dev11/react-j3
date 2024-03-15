import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import { useGlobalContext } from "../../hooks/use-global-context";

const AboutUs = () => {
  const { title, setTitle } = useGlobalContext();

  return (
    <div>
      <p>{title}</p>
      <NavLink to={ROUTES.contactUs}>GOT TO CONTACT PAGE</NavLink>
      <br />
      <br />
      <button onClick={() => setTitle("Title-2")}>change title</button>
    </div>
  );
};

export default AboutUs;
