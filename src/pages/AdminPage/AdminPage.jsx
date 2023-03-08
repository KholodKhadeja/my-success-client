import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import TitleFunctionSmall from '../../partial/TitleComponent/TitleFunctionSmall';
import { Fragment } from 'react';
import UserInfoRow from './UserInfoRow';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import "./adminpage.scss";

const AdminPage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [userChosenRole, setUserChosenRole] = useState(null);
    const [showClass, setShowClass] = useState(false);
    const [showSpecialization, setShowSpecialization] = useState(false);
  
    const handleRoleChosing = (ev) => {
      setUserChosenRole(ev.target.value);
    };
  
    useEffect(() => {
      if(userChosenRole === "teacher"){
        setShowClass(false); setShowSpecialization(true);
      }
      if(userChosenRole === "student"){
        setShowClass(true); setShowSpecialization(false);
      }
    }, [userChosenRole]);

    return (
        <Fragment>
<div className="upper-div">
            <span>
            <TitleFunction text={"ניהול משתמשים"}/></span>
            <div className="my-lessons-upper-left-div">
            <Button className="add-lesson-btn mb-3" onClick={handleShow}>
          הוספת משתמש
            </Button>

                 <div className="input-group mb-3">
                 <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                <span className="input-group-text" id="inputGroup-sizing-default">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
</span>
</div>
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

 {/* *********************************THIS IS THE MODAL *****************************************/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>הוספת משתמש</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
        <br />
        <Form.Group className="mb-2 names-div" controlId="formBasicName">
          <Form.Control className="form-controll short-input" type="text" placeholder="שם פרטי" />
          <Form.Control
            className="form-controll short-input" type="text" placeholder="שם משפחה" />
        </Form.Group>
        <Form.Group className="mb-2" >
          <Form.Control className="form-controll" type="text" placeholder="דואר אלקטרוני" />
        </Form.Group>
        <Form.Group className="mb-2" >
         <Form.Control className="form-controll" type="password" placeholder="סיסמה" />
        </Form.Group>
        <Form.Group className="mb-2 names-div" >
          <Form.Select  aria-label="Default select example" className="short-input form-controll" value={userChosenRole} 
          onChange={handleRoleChosing} >
            <option>בחר תפקיד</option>
            <option value="teacher">מורה</option>
            <option value="student">תלמיד</option>
          </Form.Select>
          {showClass&&(
            <Form.Control
              className="form-controll short-input"
              type="text"
              placeholder="כיתה"
            /> )}
          {showSpecialization&&(
            <Form.Control
              className="form-controll short-input"
              type="text"
              placeholder="התמחות" /> )}
        </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="add-lesson-btn" onClick={handleClose}>
            הוספת משתמש
          </Button>
          <Button variant="secondary" className="btn-danger" onClick={handleClose}>
            ביטול
          </Button>
        </Modal.Footer>
      </Modal>
        </Fragment>
    );
}

export default AdminPage;
