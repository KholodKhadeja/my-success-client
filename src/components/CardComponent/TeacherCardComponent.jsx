import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
import { toast } from "react-toastify";
import TimePicker from "react-bootstrap-time-picker";


const TeacherCardComponent = ({cardKey, subject,topic, teacherid,date, hour, learningLevel, zoomLink, profileImg, lessonId, userid}) => {
  const loggedIn=useSelector((state)=>state.auth.loggedIn);
  const [selectedDate, setSelectedDate] = useState(null);
  const [actualteachername, setTeachername] = useState({
    firstname:"",
    lastname:""
    });
    const [selectedTime, setSelectedTime] = useState('10:00');
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
    date:date.toISOString,
    hour:new Date(hour).toLocaleTimeString(),
    learningLevel: learningLevel,
    zoomLink: zoomLink,
    lessonId:  lessonId,
    students:[]
  });

  const handleTimeChange = (time)=>{
    const selectedDate = new Date(time * 1000);
    const formattedTime = selectedDate.toISOString().substr(11, 5);
    setSelectedTime(formattedTime);
    setLessonDetails(prevState => ({
      ...prevState,
      hour: formattedTime
    }));
  }
  Intl.DateTimeFormat().resolvedOptions().timeZone = 'UTC';
  useEffect(() => {
    loggedIn &&(
    (async()=>{
      try{
          let { data } = await axios.get(`users/getuserbyid/${teacherid}`);
          setTeachername({
             firstname: data.firstname,
             lastname:data.lastname,
           });
      }catch(err){
        toast.error('לא מצליח לטעון נתונים, תרענן עמוד', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      })());
  }, [teacherid]);

  let basicPath="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/empty-star.png?raw=true";
const [imagePath, setImagePath] =  useState(basicPath);

const handleLessonDetailsEdit = (ev) =>{
  let lessonData=JSON.parse(JSON.stringify(lessonDetails));
  if(lessonData.hasOwnProperty(ev.target.id)){
    lessonData[ev.target.id] = ev.target.value;
    setLessonDetails(lessonData);
  }
}

const handleDateSelect=(date)=>{
  setSelectedDate(date);
  setLessonDetails(prevState => ({
    ...prevState,
    date: date.toISOString
  }));
}

const handleUpdateLesson = async()=>{
  try {
    let { data } = await axios.patch("lessons/", {
      id:lessonId,
      subject: lessonDetails.subject,
      topic: lessonDetails.topic,
      date:selectedDate,
      hour: lessonDetails.hour,
      learningLevel: lessonDetails.learningLevel,
      zoomLink: lessonDetails.zoomLink,
    });
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
        window.location.href ='/mylessons';
        window.location.reload();
      }, 5000);
  } catch (err) {
    // let errorMsgs = "";
    // for (let errorItem of err.response.data.err.details) {
    //   errorMsgs += `${errorItem.message}`;
    // }
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

const handleDeleteLessonFunction =async()=>{
  try {
    await axios.delete(`/lessons/${lessonId}/${userid}`);
    toast.success('השיעור נמחק בהצלחה', {
      position: "bottom-center",
      autoClose:5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  } catch (err) {
    console.log(err);
    toast.error(`יש בעיה במחיקת השיעור`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
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
      <br/>
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
<span>מתחיל ב: &nbsp;</span>
<span> {date.slice(0,9)}</span>
<br/>
<span> {lessonDetails.hour}</span>
</p>
</div>
{/* <NavLink className="enter-lesson-btn" to="/connecttolesson">התחבר</NavLink> */}
</div>
</div>
}


{/* THIS IS THE EDIT MODAL */}
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

    <DatePicker id="date"
      selected={selectedDate} 
      onChange={handleDateSelect}
      dateFormat="yyyy-MM-dd"
      placeholderText="בחר תאריך" className="form-control add-lesson-inputs mb-1" 
    />

<TimePicker start="10:00" end="22:00" step={30} className="add-lesson-inputs mb-1"   id="hour"
 onChange={handleTimeChange} value={selectedTime}/>

<Form.Control type="text" className="add-lesson-inputs mb-1" value={lessonDetails.zoomLink}  
onChange={handleLessonDetailsEdit} id="zoomLink"/>
        </Modal.Body>
        <Modal.Footer>
          <Button className="add-lesson-btn" onClick={handleUpdateLesson}>
            עדכון שיעור
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
<Button variant="danger" onClick={handleDeleteLessonFunction}>  למחוק</Button>
  <Button variant="secondary" onClick={handleCloseSec}> ביטול</Button>
</Modal.Footer>
</Modal>


</Fragment> );
}

export default TeacherCardComponent;
