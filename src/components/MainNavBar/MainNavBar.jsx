import React, { Fragment } from 'react';
import "./navbarstyling.scss";
import NavBarLinkPartial from '../../partial/PartialNavBarItem/Navbarlinkpartial';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

let navLinks = [
  {
    label: "ראשי",
    url: "/home",
  },
  {
    label: "שיעורים",
    url: "/lessons",
  },
  {
    label: "השיעורים שלי",
    url: "/mylessons",
  },
];

let authTeacherStudLinks = [
  {
    label: "השיעורים שלי",
    url: "/mylessons",
  },
];
let authAdminLinks = [
  {
    label: "ניהול משתמשים",
    url: "/usersadmin",
  },
];

const MainNavBar = () => {
    return (
        <Fragment>
<nav className="shadow p-2 mb-3 navbar navbar-expand-lg sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/logo.png?raw=true" className='logo-img'/>
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-lg-1 rightnav">
      {navLinks.map((item, idx) => (
              <NavBarLinkPartial
                key={"navlinks" + idx}
                label={item.label}
                link={item.url}
              />
            ))}
      </ul>
      </div>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <div className="d-flex justify-content-center">
      <ul className="navbar-nav mb-lg-0 rightnav">
        <li className="nav-item">
          <NavLink className="nav-link navig-btn" to="/login">התחבר</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navig-btn" to="/register">הירשם</NavLink>
        </li>
{/* show when loggedin */}
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <li className="nav-item">
          <NavLink className="nav-link navig-btn" to="/register">
            <img src="" alt="profile image"/>
            </NavLink>
        </li>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">הצג פרטים</Dropdown.Item>
        <Dropdown.Item href="#/action-2">התנתק</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      </ul>
      </div>
    </div>
  </div>
</nav>
</Fragment>
    );
}

export default MainNavBar;
