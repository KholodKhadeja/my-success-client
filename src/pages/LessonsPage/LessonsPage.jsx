import React, { Fragment } from 'react';
import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import CardComponent from '../../components/CardComponent/CardComponent';
import FavCardComponent from 'components/CardComponent/FavCardComponent';
import BasicCardComponent from 'components/CardComponent/BasicCardComponent';
import "./LessonsPageStyling.scss";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';


let OriginalLessonsArray=[], currentUserId, idkeeper;
let matchLessonsArr=[];
let notMatchLessonsArr=[];
let currentStudentFavLessons=[];
const LessonsPage = () => {
  // let {search}=useParams();
const [lessonsArr, setLessonsArr]=  useState(OriginalLessonsArray);
const userRole = useSelector((state)=>state.auth.role);
const userData = useSelector((state)=>state.auth.userData);
const loggedIn=useSelector((state)=>state.auth.loggedIn);
const [searchWord, setSearchWord] = useState(null);
const [matchLessonsArrState, setMatchLessonsArrState] = useState([]);
const [notMatchLessonsArrState, setNotMatchLessonsArrState] =  useState([]);

useEffect(() => {
  try{
    currentUserId=userData.id;
    idkeeper=currentUserId;
  }catch(err){
  }
}, []);

useEffect(() => {
  (async () => {
    try {
      let { data } = await axios.get('/lessons');
      OriginalLessonsArray = JSON.parse(JSON.stringify(data));
      setLessonsArr(OriginalLessonsArray);
    } catch (err) {
      toast.error("שגיאה בטעינת נתונים", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  })();
}, []);

useEffect(() => {
  loggedIn&&(
  (async () => {
    try {
  let { data } = await axios.get(`users/getuserbyid/${currentUserId}`);
  if(userRole==="student") {
    currentStudentFavLessons=JSON.parse(JSON.stringify(data.favlessons));
    matchLessonsArr = OriginalLessonsArray.filter(item1 => currentStudentFavLessons.some(item2 => item1._id === item2._id));
    setMatchLessonsArrState(JSON.parse(JSON.stringify(matchLessonsArr)));
    notMatchLessonsArr = [...OriginalLessonsArray, ...currentStudentFavLessons].filter(item => !matchLessonsArr.some(commonItem => commonItem._id === item._id));
    setNotMatchLessonsArrState(JSON.parse(JSON.stringify(notMatchLessonsArr)));  
  }
  if(userRole=="admin" || userRole=="teacher" || !loggedIn){
    OriginalLessonsArray = JSON.parse(JSON.stringify(data));
    setLessonsArr(OriginalLessonsArray);
  }
 }
     catch(err){
      console.log(err);
     }
    })());
}, []);

useEffect(() => {
  let regex = new RegExp(searchWord, "i"); 
 if (userRole === "teacher" || userRole==="admin" || !loggedIn){
  let lessonArrCopy = JSON.parse(JSON.stringify(OriginalLessonsArray)); 
  lessonArrCopy =  lessonArrCopy.filter((item) => regex.test(item.subject));
  setLessonsArr(lessonArrCopy);
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

const handleSearchWordChange =(ev)=>{
  setSearchWord(ev.target.value);
  }
return(
<Fragment>
<div className='large-section lessons-section'>
<div className="upper-div">
            <span>
                 <TitleFunction text={"שיעורים"}/></span>
                 <div className="input-group mb-3 lessons-input-group">
                 <input type="text" className="form-control" value={searchWord} 
                 onChange={handleSearchWordChange} placeholder="חיפוש לפי שם מקצוע"/>
                <span className="input-group-text" id="inputGroup-sizing-default">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
</span>
</div></div>

<div className='lessons-div-lessons-page'> 
{
  userRole=="student"&&notMatchLessonsArrState.length==0 &&matchLessonsArrState.length==0&&(
    <div className="spinnerName">
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  </div>
  )
}
{userRole=="student"&&(notMatchLessonsArrState.map((item, index) => (
      <CardComponent key={"index"+item._id} teacherid={item.teacherId} lessonid={item._id}
              topic={item.topic}
               subject={item.subject}
               date={item.date}
                hour = {item.hour} userid={currentUserId} zoomLink={item.zoomLink}
                profileImg={"https://raw.githubusercontent.com/KholodKhadeja/my-success-client/main/src/images/profile-img.png"}/>
                )))}
{userRole=="student"&&(matchLessonsArrState.map((item, index) => (
      <FavCardComponent key={"index"+item._id} teacherid={item.teacherId} lessonid={item._id}
              topic={item.topic}
               subject={item.subject} zoomLink={item.zoomLink}
               date={item.date}
                hour = {item.hour} userid={currentUserId}
                profileImg={"https://raw.githubusercontent.com/KholodKhadeja/my-success-client/main/src/images/profile-img.png"}/>
                )))}

{
  (userRole=="teacher" || userRole=="admin")&&(lessonsArr.length==0)&&(
    <div className="spinnerName">
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  </div>
  )
}
{(userRole=="teacher" || userRole=="admin")&&(lessonsArr.map((item, index) => (
      <CardComponent key={"index"+item._id} teacherid={item.teacherId} lessonid={item._id}
              topic={item.topic}
               subject={item.subject}
               date={item.date}
                hour = {item.hour} userid={currentUserId} zoomLink={item.zoomLink}
                profileImg={"https://raw.githubusercontent.com/KholodKhadeja/my-success-client/main/src/images/profile-img.png"}/>
                )))}

{(!loggedIn)&&(lessonsArr.map((item, index) => (
      <BasicCardComponent key={"index"+item._id} teacherid={item.teacherId} lessonid={item._id}
              topic={item.topic}
               subject={item.subject}
               date={item.date}
                hour = {item.hour} userid={currentUserId} zoomLink={item.zoomLink}
                profileImg={"https://raw.githubusercontent.com/KholodKhadeja/my-success-client/main/src/images/profile-img.png"}/>
                )))}
  </div>
  <div className='pagination-cont'>
  </div>
</div>
</Fragment>
    );
}

export default LessonsPage;
