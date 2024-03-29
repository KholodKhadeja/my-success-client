import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import "./card-styling.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const FavCardComponent = ({cardKey,teacherid,topic, subject,date, hour, profileImg,lessonid, userid, zoomLink}) => {
  const history = useHistory();
  const [show, setShow] = useState(false);
const [showSec, setShowSec] = useState(false);
  const userRole = useSelector((state)=>state.auth.role);
  const loggedIn=useSelector((state)=>state.auth.loggedIn);
  const [profileImgS, setProfileImg] = useState(profileImg);
  const [alreadyRegisteredUser, setAlreadyRegisteredUser]=useState(false);
  let basicPath="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/signed-star.png?raw=true";
const [imagePath, setImagePath] =  useState(basicPath);
const [startClicked, setStarClicked] = useState(true);
const [actualteachername, setTeachername] = useState({
firstname:"",
lastname:""
});

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const handleCloseSec = () => setShowSec(false);
const handleShowSec = () => setShowSec(true);

useEffect(() => {
  axios.get(`lessons/getbyid/${lessonid}`)
    .then((res) => {
      const lessonStudentsArr = JSON.parse(JSON.stringify(res.data.students));
      const foundIStudent = lessonStudentsArr.findIndex(elem => elem == userid);
      if (foundIStudent !== -1) {
        setAlreadyRegisteredUser(true);
      } else {
        setAlreadyRegisteredUser(false);
      }
    })
    .catch((err) => {
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
    });
}, [lessonid]);

useEffect(() => {
  loggedIn &&(
  (async()=>{
    try{
        let { data } = await axios.get(`users/getuserbyid/${teacherid}`);
       setProfileImg(data.profileImg);
        setTeachername({
           firstname: data.firstname,
           lastname:data.lastname,
         });
    }catch(err){

    }
    })());
}, [teacherid]);

const switchImg =()=>{
    if(startClicked){
    basicPath="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/empty-star.png?raw=true";  
    setStarClicked(false);
    setImagePath(basicPath);
    axios.delete(`users/${userid}/favlessons/${lessonid}`,{
    }).then((res)=>{
     toast.success('השיעור הוסר מרשימת המועדפים', {
       position: "bottom-center",
       autoClose: 6000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",
       });
       setTimeout(() => {
        window.location.href = '/favoritelessons';
       }, 3000);
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
else{
    basicPath="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/signed-star.png?raw=true";  
    setStarClicked(true);
    setImagePath(basicPath);
    axios.post(`users/${userid}/favlessons/${lessonid}`,{
     }).then((res)=>{
      toast.success('השיעור התווסף לרשימת המועדפים בהצלחה', {
        position: "bottom-center",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        setTimeout(() => {
          window.location.href ="/favoritelessons";
        }, 5000);
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
}

const handleStudentRegisterToLesson = ()=>{
  axios.post(`users/${userid}/registertolesson/${lessonid}`,{
  }).then((res)=>{
   toast.success('התלמיד נרשם לשיעור בהצלחה', {
     position: "bottom-center",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
     });
     handleClose();
     setTimeout(() => {
      window.location.href ='/mylessons';
     }, 5000);
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

const handleCancelRegisteration=()=>{
  axios.delete(`users/${userid}/mylessons/${lessonid}`,{
  }).then((res)=>{
   toast.success('ההרשמה בוטלה', {
     position: "bottom-center",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "light",
     });
     handleCloseSec();
     setTimeout(() => {
      window.location.href ='/mylessons';
     }, 5000);
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
       <div className='lesson-card'>
            <div className='star-section'>
              { userRole ==="student" && (<img id="star-img" src={imagePath}
                 alt="wishlist star" onClick={switchImg}/>)
            }

            </div>
            <div className='section-1'>
                 <div className='card-img-container'>
                       <img src={profileImg} alt="teacher name" />
                 </div>
                 <p className="teacher-name">{actualteachername.firstname} {actualteachername.lastname}</p>
            </div>
            <div className='section-2'>
                 <p>
                    <span>מקצוע: &nbsp;</span>
                    <span>{subject}</span>
                 </p>
                 <p>
                    <span>נושא: &nbsp;</span>
                    <span>{topic}</span>
                 </p>
            </div>
<div className='section-3'>
  <div>
    <p>
        <span>מתחיל ב:</span>
        <span>{date.slice(0,10)}</span>
        <br/>
        <span>{new Date(hour).toLocaleTimeString()}</span>
    </p>
  </div>
  { alreadyRegisteredUser && userRole ==="student"&&(
    <div className='d-flex justify-content-evenly'>
           <button  className="connect-lesson-btn" onClick={()=>{
             window.open(zoomLink, "_blank");
           }}>התחבר</button>
       <button type="button" className="remove-lesson-btn"  onClick={handleShowSec}>
                הסרה</button></div>
     )}
 { !alreadyRegisteredUser &&userRole ==="student"&&(
       <button type="button" className="sign-up-lesson-btn"  onClick={handleShow}>
       הרשמה </button>)
  }
</div>
</div>

{/* ------------------------------------אישור הרשמה לשיעור -------------------------------------------- */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">אישור הרשמה לשיעור</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      צריך אישור להרשמה סופית לשיעור בבקשה
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={() => this.handleStudentRegisterToLesson(lessonid)}>אישור</button>
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">סגירה</button>
      </div>
    </div>
  </div>
</div>

{/* ------------------------------------אישור הרשמה לשיעור -------------------------------------------- */}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>אישור הרשמה לשיעור</Modal.Title>
        </Modal.Header>
        <Modal.Body>      צריך אישור להרשמה סופית לשיעור בבקשה</Modal.Body>
        <Modal.Footer>
          <Button className="add-lesson-btn" onClick={handleStudentRegisterToLesson}>
            אישור
          </Button>
          <Button variant="danger" onClick={handleClose}>
            סגירה
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ------------------------------------אישור הסרת הרשמה-------------------------------------------- */}
<Modal show={showSec} onHide={handleCloseSec}>
        <Modal.Header closeButton>
          <Modal.Title>אישור הסרת השיעור</Modal.Title>
        </Modal.Header>
        <Modal.Body>אתה בטוח שרוצה להסיר את ההרשמה </Modal.Body>
        <Modal.Footer>
          <Button className="add-lesson-btn" onClick={handleCancelRegisteration}>
            אישור
          </Button>
          <Button variant="danger" onClick={handleCloseSec}>
            סגירה
          </Button>
        </Modal.Footer>
      </Modal>

</Fragment>
    );
}

export default FavCardComponent;
