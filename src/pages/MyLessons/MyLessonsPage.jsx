import "./MyLessonStyling.scss";
import CardComponent from "../../components/CardComponent/CardComponent";
import FavCardComponent from "components/CardComponent/FavCardComponent";
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
import Spinner from 'react-bootstrap/Spinner';

let allMyLessons = [];    let matchLessonsArr=[]; let formattedDate;
let notMatchLessonsArr=[];
let profileImg, userIdOriginal=null;
const MyLessonsPage = () => {
  let currentStudentFavLessons=[];
  let userId;
  const [matchLessonsArrState, setMatchLessonsArrState] = useState([]);
const [notMatchLessonsArrState, setNotMatchLessonsArrState] =  useState([]);
  const userRole = useSelector((state)=>state.auth.role);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formSelect, setFormSelect] = useState(null);
  const loggedIn=useSelector((state)=>state.auth.loggedIn);
  const userData = useSelector((state)=>state.auth.userData);
  const [userLessons, setUserLessons] = useState(allMyLessons);
  const [selectedTime, setSelectedTime] = useState('10:00');
   const [searchWord, setSearchWord] = useState("");

  const [newLessonData, setNewLessonData] = useState({
    topic:"",
    subject:"",
    date:selectedDate,
     hour:"",
     learningLevel: formSelect,
     zoomLink:"",
     students:[],
  });

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
     allMyLessons=JSON.parse(JSON.stringify(data.mylessons));
     currentStudentFavLessons=JSON.parse(JSON.stringify(data.favlessons));
     setUserLessons(allMyLessons);
     if(userRole==="student") {
      for (let i = 0; i < allMyLessons.length; i++) {
        let item2 = allMyLessons[i];
       let commonItem = currentStudentFavLessons.find(item => item._id === item2._id);
        if (commonItem) {
          matchLessonsArr.push(commonItem);
        }
      }
      setMatchLessonsArrState(JSON.parse(JSON.stringify(matchLessonsArr)));
      notMatchLessonsArr = allMyLessons.filter(item1 => !matchLessonsArr.some(item2 => item1._id === item2._id));
      setNotMatchLessonsArrState(JSON.parse(JSON.stringify(notMatchLessonsArr)));
     }
  }catch(err){
    toast.error('שגיאה בטעינת נתונים', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  })();
  }, []);

  useEffect(() => {
    let regex = new RegExp(searchWord, "i"); 
    if (userRole === "teacher" || userRole==="admin" || !loggedIn){
     let lessonArrCopy = JSON.parse(JSON.stringify(allMyLessons)); 
     lessonArrCopy =  lessonArrCopy.filter((item) => regex.test(item.subject));
     setUserLessons(lessonArrCopy);
    }
   if(userRole === "student"){
     let matchArrCopy = JSON.parse(JSON.stringify(matchLessonsArr)); 
     matchArrCopy = matchArrCopy.filter((item) => regex.test(item.subject));
     setMatchLessonsArrState(matchArrCopy);
  
     let noMatchArrCopy = JSON.parse(JSON.stringify(notMatchLessonsArr)); 
     noMatchArrCopy = noMatchArrCopy.filter((item) => regex.test(item.subject));
     setNotMatchLessonsArrState(noMatchArrCopy);
    }
  }, [searchWord]);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showSec, setShowSec] = useState(false);
  const handleCloseSec = () => setShowSec(false);
  const handleShowSec = () => setShowSec(true);

  let [active, setActive] = useState(1);

  const handleInputChanges=(ev)=>{
    ev.preventDefault();
    let newLesson = JSON.parse(JSON.stringify(newLessonData)); 
    newLesson[ev.target.id] = ev.target.value;
    setNewLessonData(newLesson); 
  }

  const handleDateSelect=(date)=>{
    const timeZoneOffset = date.getTimezoneOffset();
    const offsetMilliseconds = timeZoneOffset * 60 * 1000;
    const adjustedDate = new Date(date.getTime() + offsetMilliseconds);
    const year = adjustedDate.getFullYear();
    const month = (adjustedDate.getMonth() + 1).toString().padStart(2, '0');
    const day = adjustedDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    setSelectedDate(date);
    setNewLessonData((prevState) => ({
      ...prevState,
      date: formattedDate,
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

  const handleSearchWordChange =(ev)=>{
    setSearchWord(ev.target.value);
    }

  const handleAddingUserRequest=(ev)=>{
    //  ev.preventDefault();
     axios.post(`users/${userIdOriginal}/mylessons`,{
      topic:newLessonData.topic,
      subject:newLessonData.subject,
      date:newLessonData.date,
       hour:newLessonData.hour,
       learningLevel:newLessonData.learningLevel,
       zoomLink:newLessonData.zoomLink,
       students:newLessonData.students,
     }).then((res)=>{
      toast.success('השיעור התווסף בהצלחה', {
        position: "bottom-center",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        handleClose();
        setTimeout(() => {
          window.location.href ='/usersadmin';
          window.location.reload();
        }, 5000);
        handleClose();
     }).catch((err)=>{
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
      theme: "light",
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
          {userRole==="teacher"&&(<Button className="add-lesson-btn mb-3" onClick={handleShow}>
              הוספת שיעור
            </Button>)} 
            <div className="input-group mb-3">
              <input   type="text" className="form-control" value={searchWord} onChange={handleSearchWordChange} placeholder="חיפוש לפי שם מקצוע"/>
              <span className="input-group-text" id="inputGroup-sizing-default">
                <svg  xmlns="http://www.w3.org/2000/svg"   width="16"  height="16"   fill="currentColor"  className="bi bi-search" viewBox="0 0 16 16" >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <br/>
        { userRole==="teacher"&&(
        <div className="text-div">
          <p>מורה יקר/ה, כדי להתחיל את השיעור תכנס לזום שלך ותפתח את השיעור</p></div>)}
        <div className="lessons-div-lessons-page">
        {
         userLessons.length===0&&(
    <div className="spinnerName">
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  </div>
  )
}
          {userRole==="student"&&(matchLessonsArrState.map((item, index) => (
      <FavCardComponent key={"index"+item._id} teacherid={item.teacherId} lessonid={item._id}
              topic={item.topic}
               subject={item.subject}
               date={item.date}
                hour = {item.hour} userid={userIdOriginal} zoomLink={item.zoomLink}
                profileImg={"https://raw.githubusercontent.com/KholodKhadeja/my-success-client/main/src/images/profile-img.png"}/>
                )))}
          {userRole==="student"&&(notMatchLessonsArrState.map((item, index) => (
      <CardComponent key={"index"+item._id} teacherid={item.teacherId} lessonid={item._id}
              topic={item.topic}
               subject={item.subject}
               date={item.date}
                hour = {item.hour} userid={userIdOriginal}  zoomLink={item.zoomLink}
                profileImg={"https://raw.githubusercontent.com/KholodKhadeja/my-success-client/main/src/images/profile-img.png"}/>
                )))}


          { userRole==="teacher" && (userLessons.map((item, index) => (
              <TeacherCardComponent key={"index"+item._id} teacherid={item.teacherId} 
              topic={item.topic}
               subject={item.subject}
               date={item.date}
                hour = {item.hour}
                profileImg={profileImg}
                learningLevel={item.learningLevel}
                lessonId={item._id} userid={userIdOriginal}
                zoomLink={item.zoomLink}
                />)
                ))}

{ userRole==="admin" && (userLessons.map((item, index) => (
              <CardComponent key={"index"+item._id} teacherid={item.teacherId} 
              topic={item.topic}
               subject={item.subject}
               date={item.date}
                hour = {item.hour}
                profileImg={profileImg}
                learningLevel={item.learningLevel}
                lessonId={item._id} userid={userIdOriginal}
                zoomLink={item.zoomLink}
                />)
                ))}
        </div>

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

   <DatePicker id="date"
      selected={selectedDate} 
      onChange={handleDateSelect}
      dateFormat="yyyy-MM-dd"
      placeholderText="בחר תאריך" className="form-control add-lesson-inputs mb-1" 
    />

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
