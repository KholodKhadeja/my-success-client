import React, { Fragment } from 'react';
import "./navbarstyling.scss";

const MainNavBar = () => {
    return (
        <Fragment>
<nav className="shadow p-2 mb-3 navbar navbar-expand-lg sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">לוגו</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-lg-1 rightnav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">ראשי</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">שיעורים</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">השיעורים שלי</a>
        </li>
      </ul></div>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <div className="d-flex justify-content-center">
      <ul className="navbar-nav mb-lg-0 rightnav">
        <li className="nav-item">
          <a className="nav-link navig-btn"  href="#">התחבר</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navig-btn" href="#">הירשם</a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
</Fragment>
    );
}

export default MainNavBar;
