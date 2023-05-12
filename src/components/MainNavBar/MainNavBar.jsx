import { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./navbarstyling.scss";
import NavBarLinkPartial from "../../partial/PartialNavBarItem/Navbarlinkpartial";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { authActions } from "../../store/auth";
import { useHistory } from "react-router-dom";

const MainNavBar = () => {
  let navLinks = [{label: "ראשי",url: "/home", },
    {label: "שיעורים", url:"/lessons", },];

  let authTeacherStudLinks = [
    {label: "ראשי",url: "/home", },
    {label: "שיעורים", url: "/lessons", },
   {label: "השיעורים שלי",url: "/mylessons",}, ];

  let authAdminLinks = [
    {label: "ראשי",url: "/home", },
   {label: "שיעורים",url: "/lessons", },
    {label: "ניהול משתמשים",url: "/usersadmin", },];

const dispatch=useDispatch();  const history = useHistory();
const loggedIn=useSelector((state)=>state.auth.loggedIn);
const userRole = useSelector((state)=>state.auth.role);

const handleLogoutBtnClick = () => {
  localStorage.clear();
  dispatch(authActions.logout());
  history.push("/home");
};

  return (
    <Fragment>
      <nav className="shadow p-2 mb-3 navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <NavLink  className="navbar-brand" to="/home">
            <img alt="logo"
              src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/logo.png?raw=true"
              className="logo-img"
            />
          </NavLink>
          <button
            className="navbar-toggler" type="button"   data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"  aria-label="Toggle navigation"  >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-1 rightnav">
              { !loggedIn && navLinks.map((item, idx) => (
                <NavBarLinkPartial
                  key={"navlinks" + idx}
                  label={item.label}
                  link={item.url} />
              ))}
             { loggedIn && userRole ==="admin" && authAdminLinks.map((item, idx) => (
                <NavBarLinkPartial
                  key={"navlinks" + idx}
                  label={item.label}
                  link={item.url} />
              ))}

          { loggedIn && (userRole ==="teacher" || userRole ==="student") && authTeacherStudLinks.map((item, idx) => (
                <NavBarLinkPartial
                  key={"navlinks" + idx}
                  label={item.label}
                  link={item.url} />
              ))}
            </ul>
          </div>

          <div className="collapse navbar-collapse justify-content-end"  id="navbarSupportedContent" >
            <div className="d-flex">
              <ul className="navbar-nav mb-lg-0 rightnav">
                {loggedIn && userRole === "student" && (
                  <li className="nav-item">
                    <NavLink className="" to="/favoritelessons">
                      <img className="navbar-fav-star-icon"
                        src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/empty-star.png?raw=true"
                        alt="עמוד המועדפים" /> </NavLink></li>
                )}
                {!loggedIn &&(<div className="theListToHide"><li className="nav-item">
                  <NavLink className="nav-link navig-btn" to="/login">  התחבר </NavLink> </li>
                <li className="nav-item"> <NavLink className="nav-link navig-btn" to="/register"> הירשם </NavLink></li></div>)}
                {/* show when loggedin */}
                {loggedIn && (
                  <Dropdown className="theListToHide">
                    <Dropdown.Toggle variant="" id="" className="dropdown-basic-item" >
                      <img
                        className="profile-navbar-img"
                        src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/profile-img.png?raw=true"
                        alt="profile image" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item className="list-item-dropdown">
                        <NavLink
                          to="/showdetails" className="none-decoration-navlink">הצג פרטים</NavLink>
                      </Dropdown.Item>
                      <Dropdown.Item className="list-item-dropdown">
                        <button  className="none-decoration-navlink" onClick={handleLogoutBtnClick}>התנתק</button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                )}
            {
                !loggedIn &&(
              <div className="hiddenListItemToShowOnCollapse">
               <li className="nav-item">
               <NavLink className="nav-link navig-btn" to="/login">  התחבר </NavLink> </li>
                     <li className="nav-item"> <NavLink className="nav-link navig-btn" to="/register"> הירשם </NavLink></li></div>)
            }

            {
              loggedIn && (
                <div className="hiddenListItemToShowOnCollapse">
                <li className="nav-item"><NavLink to="/showdetails" className="none-decoration-navlink">הצג פרטים</NavLink></li>
                <button  className="none-decoration-navlink" onClick={handleLogoutBtnClick}>התנתק</button></div>
              )
            }

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default MainNavBar;
