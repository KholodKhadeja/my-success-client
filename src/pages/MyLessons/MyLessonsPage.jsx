import "./MyLessonStyling.scss";
import CardComponent from "../../components/CardComponent/CardComponent";
import Pagination from "react-bootstrap/Pagination";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Fragment } from "react";
import TitleFunction from "../../partial/TitleComponent/TitleFunction";
import TeacherCardComponent from "../../components/CardComponent/TeacherCardComponent";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import axios from "axios";
import TitleFunctionSmall from "../../partial/TitleComponent/TitleFunctionSmall";
// import TimePicker from 'react-time-picker';
import TimePicker from "react-bootstrap-time-picker";
import { toast } from "react-toastify";

let allMyLessons = [];
let profileImg, userIdOriginal=null;
const MyLessonsPage = () => {
  let userId;
  const userRole = useSelector((state)=>state.auth.role);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formSelect, setFormSelect] = useState(null);
  const loggedIn=useSelector((state)=>state.auth.loggedIn);
  const userData = useSelector((state)=>state.auth.userData);
  const [userLessons, setUserLessons] = useState(allMyLessons);
  const [newLessonData, setNewLessonData] = useState({
    topic:"",
    subject:"",
    date:selectedDate,
     hour:"",
     learningLevel: formSelect,
    //  teacherId: userId,
     zoomLink:""
  });
  const [selectedTime, setSelectedTime] = useState('10:00');

  useEffect(() => {
    try{
      userId=userData.id;
      userIdOriginal=userId;
    }catch(err){
    }
 }, [loggedIn]);

 useEffect(() => {
  (async()=>{
  try{
      let { data } = await axios.get(`users/getuserbyid/${userIdOriginal}`);
      profileImg=data.profileImg;
      setUserLessons(data.mylessons)
  }catch(err){
      console.log(err);
  }
  })();
  }, []);

  // useEffect(() => {
  //   (async()=>{
  //   try{
  //       let { data } = await axios.get(`users/getuserbyid/${userId}`);
  //       profileImg=data.profileImg;
  //       setUserLessons(data.mylessons)
  //   }catch(err){
  //       console.log(err);
  //   }
  //   })();
  //   }, [userId]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showSec, setShowSec] = useState(false);
  const handleCloseSec = () => setShowSec(false);
  const handleShowSec = () => setShowSec(true);

  let [active, setActive] = useState(1);
  // let [currentPage, setCurrentPage] = useState(active);
  // let lessonsPerPage=12;
  // let lastLessonIndex = currentPage * lessonsPerPage;
  // let firstLessonIndex = lastLessonIndex - lessonsPerPage;
  // currentLessons = lessons.slice(firstLessonIndex, lastLessonIndex); // the new array

  const handleInputChanges=(ev)=>{
    ev.preventDefault();
    let newLesson = JSON.parse(JSON.stringify(newLessonData)); 
    newLesson[ev.target.id] = ev.target.value;
    setNewLessonData(newLesson); 
  }

  const handleDateSelect=(date)=>{
    setSelectedDate(date);
    setNewLessonData(prevState => ({
      ...prevState,
      date: date
    }));
  }

  const handleTimeChange = (time)=>{
    const selectedDate = new Date(time * 1000);
    const formattedTime = selectedDate.toISOString().substr(11, 5);
    
    setSelectedTime(formattedTime);
    setNewLessonData(prevState => ({
      ...prevState,
      hour: formattedTime
    }));
  }
  Intl.DateTimeFormat().resolvedOptions().timeZone = 'UTC';

const handleFormSelectChange = (event) =>{
  const learningLevel = event.target.value;
  setFormSelect(learningLevel);
  setNewLessonData(prevState => ({
    ...prevState,
    learningLevel: learningLevel
  }));
}

  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }


  const handleAddingUserRequest=(ev)=>{
    console.log("entered the function");
    //  ev.preventDefault();
    console.log(userIdOriginal);
  console.log(newLessonData);
     axios.post(`users/${userIdOriginal}/mylessons`,{
      topic:newLessonData.topic,
      subject:newLessonData.subject,
      date:newLessonData.date,
       hour:newLessonData.hour,
       learningLevel:newLessonData.learningLevel,
       zoomLink:newLessonData.zoomLink
     }).then((res)=>{
      console.log(res);
      toast.success('Lesson Added Successfully!', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        handleClose();
     }).catch((err)=>{
      console.log(err);
      let errMsg;
      if(err.message === "Request failed with status code 400"){
    errMsg=err.request.response;
   }
  if(err.message === "Network Error"){
   errMsg= err.message;
  }
   toast.error(`${errMsg}`, {
      position: "bottom-center",
     autoClose: 5000,
     hideProgressBar: false,
   closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    })
     }

  return (
    <Fragment>
      <div className="large-section lessons-section">
        <div className="upper-div">
          <span>
            <TitleFunction text={"השיעורים שלי"} />
          </span>
          <div className="my-lessons-upper-left-div">
            <Button className="add-lesson-btn mb-3" onClick={handleShow}>
              הוספת שיעור
            </Button>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"  />
              <span className="input-group-text" id="inputGroup-sizing-default">
                <svg  xmlns="http://www.w3.org/2000/svg"   width="16"  height="16"   fill="currentColor"  className="bi bi-search" viewBox="0 0 16 16" >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
       
        <div className="lessons-div-lessons">
          {
            userLessons.length ==0 &&(
              <p className="fadeha-text">אולי כדאי לך להתחיל להשתמש במערכת ולהוסיף שיעורים!
                <br/>
                מה אתה חושב??
              </p>

            )
          }
          {/* for students show this */}
          { userRole=="student"&&(userLessons.map((item, index) => (
              <CardComponent key={"card"+index} teacherId={newLessonData.teacherId} 
              topic={item.topic}
               subject={item.subject}
               date={item.date}
                hour = {item.hour}/>)
                ))}
          {/* for teachers show this */}
          { userRole=="teacher" && (userLessons.map((item, index) => (
              <TeacherCardComponent key={item._id} teacherid={item.teacherId} 
              topic={item.topic}
               subject={item.subject}
               date={item.date}
                hour = {item.hour}
                profileImg={profileImg}
                learningLevel={item.learningLevel}
                />)
                ))}
        </div>
        {/* <div className='pagination-cont'>
            <Pagination size="sm">{items}</Pagination>
          </div> */}
      </div>
-
      {/* THIS IS THE MODAL */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>          <span>
            <TitleFunctionSmall className="title-text-sec" text={"הוספת שיעור"} />
          </span> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" id="subject" className="add-lesson-inputs mb-1" placeholder="המקצוע"  value={newLessonData.subject}
          onChange={handleInputChanges}/>
          <Form.Control type="text" id="topic" className="add-lesson-inputs mb-1" placeholder="נושא השיעור"  value={newLessonData.topic}  
          onChange={handleInputChanges}/>
          {/* <Form.Select aria-label="Default select example" className="add-lesson-inputs mb-1">
      <option>יום</option>
      <option value="1">א</option>
      <option value="2">ב</option>
      <option value="3">ג</option>
      <option value="4">ד</option>
      <option value="5">ה</option>
      <option value="6">ו</option>
      <option value="7">שבת</option>
    </Form.Select> */}

   <DatePicker id="date"
      selected={selectedDate} 
      onChange={handleDateSelect}
      dateFormat="yyyy-MM-dd"
      placeholderText="בחר תאריך" className="form-control add-lesson-inputs mb-1" 
    />

{/* <TimePicker id="hour" className="hour-input"
        onChange={handleTimeChange}
        value={selectedTime}
        disableClock={true}
        format="HH:mm" 
/> */}

<TimePicker start="10:00" end="22:00" step={30} className="add-lesson-inputs mb-1" 
 onChange={handleTimeChange} value={selectedTime}/>

   <Form.Select id="learningLevel" aria-label="Default select example" className="add-lesson-inputs mb-1" 
   value={formSelect} onChange={handleFormSelectChange}>
      <option>רמת הלימוד</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Form.Select>
          <Form.Control type="text" id="zoomLink" className="add-lesson-inputs mb-1" placeholder="קישור לזום" value={newLessonData.zoomLink}  
          onChange={handleInputChanges}/>
        </Modal.Body>
        <Modal.Footer>
          <Button className="add-lesson-btn" onClick={handleAddingUserRequest}>
            הוספת שיעור
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            ביטול
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default MyLessonsPage;
