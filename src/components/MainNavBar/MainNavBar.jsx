import React, { Fragment, useState } from 'react';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

      { isLoggedIn && <li className="nav-item">
          <NavLink className="" to="/favoritelessons">
            <img className="navbar-fav-star-icon" src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/empty-star.png?raw=true" 
            alt="עמוד המועדפים"/>
          </NavLink>
        </li>}

        <li className="nav-item">
          <NavLink className="nav-link navig-btn" to="/login">התחבר</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navig-btn" to="/register">הירשם</NavLink>
        </li>
{/* show when loggedin */}
{isLoggedIn && <Dropdown>
      <Dropdown.Toggle variant="" id="" className='dropdown-basic-item'>
            <img className="profile-navbar-img" src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/profile-img.png?raw=true" alt="profile image"/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item className='list-item-dropdown'><NavLink to="/showdetails">הצג פרטים</NavLink></Dropdown.Item>
        <Dropdown.Item className='list-item-dropdown' href="#/action-2">התנתק</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>}
      </ul>
      </div>
    </div>
  </div>
</nav>
</Fragment>
    );
}

export default MainNavBar;
