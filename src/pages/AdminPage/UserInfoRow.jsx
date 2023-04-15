import React, { Fragment, useState } from 'react';
import { Switch } from 'antd';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from 'react';

const UserInfoRow = ({num,firstName, lastName,checked,userId, email,role,classN, specialization, password}) => {
  const [userChosenRole, setUserChosenRole] = useState(role);  
  const [toggle, settoggle] = useState(checked);
  const [toggleSec, settoggleSec] = useState(checked);
  const [userData,setUserData] = useState({
          num:num,
          userId:userId,
          firstName:firstName,
          lastName:lastName,
          checked: toggle,
          email:email,
          role:{userChosenRole},
          class:classN,
          specialization:specialization,
          password:password,
        });
      
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showSec, setShowSec] = useState(false);
    const handleCloseSec = () => setShowSec(false);
    const handleShowSec = () => setShowSec(true);

    const handleToggle=()=>{
      if(toggle){
        settoggle(false);
      }
      if(!toggle){
        settoggle(true);
      }
    }

    const handleRoleChosing = (ev) => {
      setUserChosenRole(ev.target.value);
      userData(prevState => ({
        ...prevState,
        role: ev.target.value
      }));
    };

    const handleUserInputsEditing = (ev) =>{
        let userInfo=JSON.parse(JSON.stringify(userData));
        if(userInfo.hasOwnProperty(ev.target.id)){
          userInfo[ev.target.id]=ev.target.value;
          setUserData(userInfo);
        }
    }

const submitChangesForUser =  () => {
  axios.patch("users/", {
      _id:userId,
      firstname:userData.firstName,
      lastname:userData.lastName,
      userstatus: toggle,
      email:userData.email,
      role:userChosenRole,
      studentclass:userData.class,
      specialization:userData.specialization,
    }).then((res)=>{
      toast.success('העדכון נשמר בהצלחה', {
        position: "bottom-center",
        autoClose:5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(() => {
          window.location.href ='/usersadmin';
          window.location.reload();
        }, 5000);
    }).catch ((err) =>{
    let errorMsgs = "";
    for (let errorItem of err.response.data.err.details) {
      errorMsgs += `${errorItem.message}`;
    }
  toast.error(`${errorMsgs}`, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}); 
}
const deletingUserFunc = async() =>{
  try {
    let { data } = await axios.delete(`/users/${userId}`);
    toast.success('המשתמש נמחק בהצלחה', {
      position: "bottom-center",
      autoClose:5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setTimeout(() => {
        window.location.href ='/usersadmin';
        window.location.reload();
      }, 5000);
  } catch (err) {
    toast.error(`${err}`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
}; 
}
    return (
        <Fragment>
        <div className="admin-page-rows-group-row">
            <p><b>{num}</b></p>
            <p>{firstName +" "+ lastName}</p>
           {/* <Switch onClick={handleToggle} checked={toggle}/> */}
            <p>{email}</p>
            <p>{role}</p>
            {
                (!classN || classN ===" "||  classN ==="null"  || classN ==="" ||  classN===null) ? <p>אין</p> : <p>{classN}</p>
            }
            {
               (!specialization || specialization ===" "|| specialization ==="null" || specialization ==="" ||  specialization=== null) ? 
               <p>אין</p> : <p>{specialization}</p>
            }

            <div className='user-icon-div'>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={handleShowSec} width="16" height="16" fill="currentColor" className="user-icon bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" onClick={handleShow} width="16" height="16" fill="currentColor" className="user-icon bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg></div>
        </div>


{/* deletion modal */}
<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>מחיקת משתמש</Modal.Title>
</Modal.Header>
<Modal.Body>האם אתה רוצה למחוק סופית את המשתמש מהמערכת?
<br/>
אולי כדאי להפוך המשתמש ללא פעיל במקום למחוק?!	&#128513; </Modal.Body>
<Modal.Footer>
<Button className="add-lesson-btn" onClick={deletingUserFunc}>  למחוק</Button>
  <Button variant="danger" onClick={handleClose}> עזוב</Button>
</Modal.Footer>
</Modal>

{/* editing user modal */}
<Modal show={showSec} onHide={handleCloseSec}>
<Modal.Header closeButton>
  <Modal.Title>עריכת משתמש</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form>
        <br />
        <Form.Group className="mb-2 names-div" >
          <Form.Control id="firstName" className="form-controll short-input" type="text" placeholder="שם פרטי" 
          value={userData.firstName} onChange={handleUserInputsEditing}/>
          <Form.Control
            className="form-controll short-input" type="text" placeholder="שם משפחה" id="lastName"
            value={userData.lastName} onChange={handleUserInputsEditing} />
        </Form.Group>
        <div className='d-flex gap-2'>
            <p>סטטוס משתמש:</p><Switch onClick={handleToggle} checked={toggle}/></div>
        <Form.Group className="mb-2" >
          <Form.Control className="form-controll" type="text" placeholder="דואר אלקטרוני"  id="email"
          value={userData.email} onChange={handleUserInputsEditing}
          />
        </Form.Group>

        <Form.Group className="mb-2" >
        <Form.Select   id="role" className="form-controll" value={userChosenRole} 
          onChange={handleRoleChosing} >
            <option>בחר תפקיד</option>
            <option value="teacher">מורה</option>
            <option value="student">תלמיד</option>
          </Form.Select>
        </Form.Group>
{
       userChosenRole === "student" &&(
        <Form.Group className="mb-2" >
        <Form.Control className="form-controll" type="text" id="class" placeholder='כיתה'
        value={userData.class} onChange={handleUserInputsEditing} />
       </Form.Group> )
  }
{  userChosenRole  === "teacher" && (
            <Form.Group className="mb-2" >
            <Form.Control className="form-controll" type="text" id="specialization" placeholder='התמחות'
        value={userData.specialization} onChange={handleUserInputsEditing} />
           </Form.Group>)
 }
      </Form>
</Modal.Body>
<Modal.Footer>
<Button className="add-lesson-btn" onClick={submitChangesForUser}>
   שמור שינויים</Button>
  <Button variant="danger" onClick={handleCloseSec}>  ביטול</Button>
</Modal.Footer>
</Modal>


</Fragment>
    );
}

export default UserInfoRow;
