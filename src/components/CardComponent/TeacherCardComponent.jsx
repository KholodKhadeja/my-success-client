import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import "./card-styling.scss";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import TitleFunctionSmall from '../../partial/TitleComponent/TitleFunctionSmall';
import axios from "axios";


const TeacherCardComponent = ({key, subject,topic, teacherid,date, hour, learningLevel, zoomLink, profileImg}) => {
  const [actualteachername, setTeachername] = useState({
    firstname:"",
    lastname:""
    });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showSec, setShowSec] = useState(false);
  const handleCloseSec = () => setShowSec(false);
  const handleShowSec = () => setShowSec(true);

  const [lessonDetails, setLessonDetails] = useState({
    subject: subject,
    topic: topic,
    teacherid:teacherid,
    date:date,
    hour: hour,
    learningLevel: learningLevel,
    zoomLink: zoomLink,
  });

  useEffect(() => {
    (async()=>{
      try{
          let { data } = await axios.get(`users/getuserbyid/${teacherid}`);
          setTeachername({
             firstname: data.firstname,
             lastname:data.lastname,
           });
      }catch(err){
          console.log(err);
      }
      })();
  }, [teacherid]);
  let basicPath="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/empty-star.png?raw=true";
const [imagePath, setImagePath] =  useState(basicPath);
const [selectedDate, setSelectedDate] = useState(date);

const handleLessonDetailsEdit = (ev) =>{
  let lessonData=JSON.parse(JSON.stringify(lessonDetails));
  if(lessonData.hasOwnProperty(ev.target.id)){
    lessonData[ev.target.id] = ev.target.value;
    setLessonDetails(lessonData);
  }
}
return (
    <Fragment>
    {
<div className='my-lesson-card'>
            <div className='teacher-btns-div'>
                <img className='teacher-btns-div-img' src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/Pencil.png?raw=true"
                 alt="edit icon" onClick={handleShow}/>
                   <img className='teacher-btns-div-img' src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/Remove.png?raw=true"
                 alt="delete icon" onClick={handleShowSec}/>
            </div>
<div className='section-1'>
     <div className='card-img-container'>
           <img src={profileImg} alt="teacher name"  />
     </div>
      <p className="teacher-name">{actualteachername.firstname} {actualteachername.lastname}</p>
</div>
<div className='section-2'>
     <p>
        <span>מקצוע: &nbsp;</span>
        <span>{lessonDetails.subject}, {lessonDetails.learningLevel}</span>
     </p>
     <p>
        <span>נושא: &nbsp;</span>
        <span>{lessonDetails.topic}</span>
     </p>
</div>
<div className='section-3'>
<div>
<p>
<span>מתחיל ב:</span>
<span> {lessonDetails.date.slice(0,9)}</span>
<br/>
<span> {new Date(lessonDetails.hour).toLocaleTimeString()}</span>
</p>
</div>
<NavLink className="enter-lesson-btn" to="/connecttolesson">התחבר</NavLink>
</div>
</div>
}


{/* THIS IS THE MODAL */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>עריכת שיעור</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <br />
          <Form.Control type="text" className="add-lesson-inputs mb-1" value={lessonDetails.subject} 
          onChange={handleLessonDetailsEdit} id="subject"/>
          <Form.Control type="text" className="add-lesson-inputs mb-1" value={lessonDetails.topic}  
          onChange={handleLessonDetailsEdit} id="topic"/>

  <Form.Select aria-label="Default select example" className="add-lesson-inputs mb-1" 
  onChange={handleLessonDetailsEdit} id="learningLevel">
      <option>רמת הלימוד</option>
      <option value="3" >3</option>
      <option value="4" selected>4</option>
      <option value="5">5</option>
    </Form.Select>
    <Form.Control type="text" className="add-lesson-inputs mb-1" value={lessonDetails.hour} 
    onChange={handleLessonDetailsEdit} id="hour"/>
          <Form.Control type="text" className="add-lesson-inputs mb-1" value={lessonDetails.zoomLink}  
          onChange={handleLessonDetailsEdit} id="zoomLink"/>
        </Modal.Body>
        <Modal.Footer>
          <Button className="add-lesson-btn" onClick={handleClose}>
            הוספת שיעור
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            ביטול
          </Button>
        </Modal.Footer>
      </Modal>


<Modal show={showSec} onHide={handleCloseSec}>
<Modal.Header closeButton>
  <Modal.Title>מחיקת שיעור</Modal.Title>
</Modal.Header>
<Modal.Body>רוצה למחוק את השיעור סופית מהמערכת?</Modal.Body>
<Modal.Footer>
<Button variant="danger" onClick={handleCloseSec}>  למחוק</Button>
  <Button variant="secondary" onClick={handleCloseSec}> ביטול</Button>
</Modal.Footer>
</Modal>


</Fragment> );
}

export default TeacherCardComponent;
