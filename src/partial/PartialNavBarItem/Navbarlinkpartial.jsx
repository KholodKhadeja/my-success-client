import { NavLink } from "react-router-dom";

const NavBarLinkPartial = ({ label, link }) => {
  return (
    <li className="nav-item">
      <NavLink
        className="nav-link"
        to={link}
        isActive={(match, location) => match && match.isExact} >
        {label}
      </NavLink>
    </li>
  );
};
export default NavBarLinkPartial;

