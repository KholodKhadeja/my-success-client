import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import TitleFunctionSmall from '../../partial/TitleComponent/TitleFunctionSmall';
import { Fragment } from 'react';
import UserInfoRow from './UserInfoRow';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from 'react';
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
import "./adminpage.scss";

let allUsersArray=[];
const AdminPage = () => {
    const [serialNum, setSerialNum] = useState(1);
    const [allUsers, setAllUsers] = useState(allUsersArray);

        const [show, setShow] = useState(false);
        const [show2, setShow2] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [userChosenRole, setUserChosenRole] = useState(null);
    const [showClass, setShowClass] = useState(false);
    const [showSpecialization, setShowSpecialization] = useState(false);
    const [userData,setUserData] = useState({
    num:{serialNum},
      firstname:"",
      lastname:"",
      checked: true,
      email:"",
      password:"",
      role:{userChosenRole},
      studentclass:"",
      specialization:"",
    });
  
    useEffect(() => {
      (async()=>{
        try{
            let { data } = await axios.get(`users/`);
           setAllUsers(data);
        }catch(err){
            console.log(err);
        }
        })();
    }, []);


    const handleRoleChosing = (ev) => {
      setUserChosenRole(ev.target.value);
      setUserData(prevState => ({
        ...prevState,
        role: ev.target.value
      }));
    };

    const handleUserInputsEditing =()=>{

    }
  
    const handleUserInputs = (ev) =>{
        let userInfo=JSON.parse(JSON.stringify(userData));
        if(userInfo.hasOwnProperty(ev.target.id)){
          userInfo[ev.target.id]=ev.target.value;
          setUserData(userInfo);
        }
    }

    useEffect(() => {
      if(userChosenRole === "teacher"){
        setShowClass(false); setShowSpecialization(true);
      }
      if(userChosenRole === "student"){
        setShowClass(true); setShowSpecialization(false);
      }
    }, [userChosenRole]);

const handleAddingUser = () =>{
  console.log(userData);
  axios.post("users/", {
      firstname:userData.firstname,
      lastname:userData.lastname,
      email:userData.email,
      password:userData.password,
      role:userData.role,
      studentclass: userData.studentclass,
      specialization:userData.specialization,
      userstatus:userData.checked,
    })
    .then((res) => {
      toast.success('המשתמש התווסף בהצלחה', {
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
          window.location.reload();
        }, 5000);
      })
    .catch((err) => {
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
    });
}


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
                <p>מס'</p>
                 <p>שם מלא</p>
                 <p>פעיל</p>
            <p>דואר אלקטרוני</p>
            <p>תפקיד</p>
            <p>כיתה</p>
            <p>התמחות</p>
            <p></p> <p></p>
                </div>

            {allUsers.map((item, index) => (
              <UserInfoRow key={item._id} num={index+1} 
              firstName={item.firstname}  lastName={item.lastname} checked={item.userstatus}
              email={item.email} password={item.password} role={item.role} classN={item.studentclass} specialization={item.specialization}/>
                ))}
            </div>

 {/* *********************************THIS IS THE MODAL *****************************************/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>הוספת משתמש</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
        <br />
        <Form.Group className="mb-2 names-div" >
          <Form.Control id="firstname" className="form-controll short-input" type="text" placeholder="שם פרטי" 
          value={userData.firstname} onChange={handleUserInputs}/>
          <Form.Control
            className="form-controll short-input" type="text" placeholder="שם משפחה" id="lastname"
            value={userData.lastname} onChange={handleUserInputs} />
        </Form.Group>
        <Form.Group className="mb-2" >
          <Form.Control className="form-controll" type="text" placeholder="דואר אלקטרוני"  id="email"
          value={userData.email} onChange={handleUserInputs} />
        </Form.Group>
        <Form.Group className="mb-2" >
         <Form.Control className="form-controll" type="password" placeholder="סיסמה" id="password"
         value={userData.password} onChange={handleUserInputs}  />
        </Form.Group>
        <Form.Group className="mb-2 names-div" >
          <Form.Select  aria-label="Default select example" id="role" className="short-input form-controll" value={userChosenRole} 
          onChange={handleRoleChosing} >
            <option>בחר תפקיד</option>
            <option value="teacher">מורה</option>
            <option value="student">תלמיד</option>
          </Form.Select>
          {showClass&&(
            <Form.Control
              className="form-controll short-input"
              type="text" id="studentclass"
              placeholder="כיתה" value={userData.studentclass} onChange={handleUserInputs}/> )}
          {showSpecialization&&(
            <Form.Control id="specialization" 
              className="form-controll short-input"
              type="text"
              placeholder="התמחות" value={userData.specialization} onChange={handleUserInputs}/> )}
        </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="add-lesson-btn" onClick={handleAddingUser}>
            הוספת משתמש
          </Button>
          <Button variant="secondary" className="btn-danger" onClick={handleClose}>
            ביטול
          </Button>
        </Modal.Footer>
      </Modal>

{/* ******************************Editing Modal********************************* */}
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>הוספת משתמש</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
        <br />
        <Form.Group className="mb-2 names-div" >
          <Form.Control id="firstName" className="form-controll short-input" type="text" placeholder="שם פרטי" 
          value={userData.firstname} onChange={handleUserInputsEditing}/>
          <Form.Control
            className="form-controll short-input" type="text" placeholder="שם משפחה" id="lastName"
            value={userData.lastname} onChange={handleUserInputsEditing} />
        </Form.Group>
        <Form.Group className="mb-2" >
          <Form.Control className="form-controll" type="text" placeholder="דואר אלקטרוני"  id="email"
          value={userData.email} onChange={handleUserInputsEditing}
          />
        </Form.Group>
        <Form.Group className="mb-2" >
         <Form.Control className="form-controll" type="password" placeholder="סיסמה" id="password"
         value={userData.password} onChange={handleUserInputsEditing}
         />
        </Form.Group>
        <Form.Group className="mb-2 names-div" >
          <Form.Select  aria-label="Default select example" id="role" className="short-input form-controll" value={userChosenRole} 
          onChange={handleRoleChosing} >
            <option>בחר תפקיד</option>
            <option value="teacher">מורה</option>
            <option value="student">תלמיד</option>
          </Form.Select>
          {showClass&&(
            <Form.Control
              className="form-controll short-input"
              type="text" id="class"
              placeholder="כיתה" value={userData.class} onChange={handleUserInputsEditing}
            /> )}
          {showSpecialization&&(
            <Form.Control id="specialization" 
              className="form-controll short-input"
              type="text"
              placeholder="התמחות" value={userData.specialization} onChange={handleUserInputsEditing}/> )}
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
