import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import { Fragment } from 'react';
import UserInfoRow from './UserInfoRow';
import "./adminpage.scss";

const AdminPage = () => {
    return (
        <Fragment>
<div className="upper-div">
            <span>
            <TitleFunction text={"ניהול משתמשים"}/></span>
                 <div className="input-group mb-3 lessons-input-group">
                 <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                <span className="input-group-text" id="inputGroup-sizing-default">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
</span>
</div></div>

            <div className='admin-page-rows-group'>
                <div className='admin-page-rows-group-row'>
                <p></p>
                 <p>משתמש</p>
                 <p>פעיל</p>
            <p>דואר אלקטרוני</p>
            <p>תפקיד</p>
            <p>כיתה</p>
            <div></div>
                </div>
                <UserInfoRow num={1} name={"ח'ולוד ח'דיגה"} checked={"true"} email={"kholod@lnet.co.il"} role={"admin"}
                 classN={"none"} />
                      <UserInfoRow num={2} name={"ח'ולוד ח'דיגה"} checked={"true"} email={"kholod@lnet.co.il"} role={"admin"}
                 classN={"none"} />
                      <UserInfoRow num={3} name={"ח'ולוד ח'דיגה"} checked={"true"} email={"kholod@lnet.co.il"} role={"admin"}
                 classN={"none"} />

            </div>
        </Fragment>
    );
}

export default AdminPage;
