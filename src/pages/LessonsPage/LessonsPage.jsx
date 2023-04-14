import React, { Fragment } from 'react';
import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import CardComponent from '../../components/CardComponent/CardComponent';
import FavCardComponent from 'components/CardComponent/FavCardComponent';
import "./LessonsPageStyling.scss";
import Pagination from 'react-bootstrap/Pagination';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';



let OriginalLessonsArray=[], currentUserId, idkeeper;
let currentStudentFavLessons=[], myLessons=[], matchLessonsArr=[],notMatchLessonsArr=[] ;
const LessonsPage = () => {
  let {search}=useParams();
const [lessonsArr, setLessonsArr]=  useState(OriginalLessonsArray);
const userRole = useSelector((state)=>state.auth.role);
const userData = useSelector((state)=>state.auth.userData);
const loggedIn=useSelector((state)=>state.auth.loggedIn);
const [searchWord, setSearchWord] = useState(search);
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
      let { data } = await axios.get("/lessons");
      OriginalLessonsArray = JSON.parse(JSON.stringify(data));
      if(search==="" || search===null){
        let lessonArrCopy = JSON.parse(JSON.stringify(OriginalLessonsArray)); 
        setLessonsArr(lessonArrCopy);
      }
     else{
      setLessonsArr(OriginalLessonsArray);
     }
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
  if(userRole=="student") {
    currentStudentFavLessons=JSON.parse(JSON.stringify(data.favlessons));
    const matchLessonsArr = OriginalLessonsArray.filter(item1 => currentStudentFavLessons.some(item2 => item1._id === item2._id));
    setMatchLessonsArrState(JSON.parse(JSON.stringify(matchLessonsArr)));
    const notMatchLessonsArr = [...OriginalLessonsArray, ...currentStudentFavLessons].filter(item => !matchLessonsArr.some(commonItem => commonItem._id === item._id));
    setNotMatchLessonsArrState(JSON.parse(JSON.stringify(notMatchLessonsArr)));  
  }
 }
     catch(err){
      console.log(err);
     }
    })());
}, []);

useEffect(() => {
  let regex = new RegExp(searchWord, "i"); 
  let lessonArrCopy = JSON.parse(JSON.stringify(OriginalLessonsArray)); 
  lessonArrCopy =  lessonArrCopy.filter((item) => regex.test(item.subject));
  setLessonsArr(lessonArrCopy);
}, [searchWord]);

let [active, setActive] = useState(1);

// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//     {number}
//     </Pagination.Item>,
//   );
// }

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
                 <input type="text" className="form-control" value={searchWord} onChange={handleSearchWordChange} placeholder='חיפוש לפי מקצוע'/>
                <span className="input-group-text" id="inputGroup-sizing-default">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
</span>
</div></div>

<div className='lessons-div-lessons-page'> 
{userRole=="student"&&(notMatchLessonsArrState.map((item, index) => (
      <CardComponent cardKey={index} teacherid={item.teacherId} lessonid={item._id}
              topic={item.topic}
               subject={item.subject}
               date={item.date}
                hour = {item.hour} userid={currentUserId} 
                profileImg={"https://raw.githubusercontent.com/KholodKhadeja/my-success-client/main/src/images/profile-img.png"}/>
                )))}
{userRole=="student"&&(matchLessonsArrState.map((item, index) => (
      <FavCardComponent cardKey={index} teacherid={item.teacherId} lessonid={item._id}
              topic={item.topic}
               subject={item.subject}
               date={item.date}
                hour = {item.hour} userid={currentUserId}
                profileImg={"https://raw.githubusercontent.com/KholodKhadeja/my-success-client/main/src/images/profile-img.png"}/>
                )))}

{(userRole=="teacher" || userRole=="admin")&&(lessonsArr.map((item, index) => (
      <CardComponent cardKey={index} teacherid={item.teacherId} lessonid={item._id}
              topic={item.topic}
               subject={item.subject}
               date={item.date}
                hour = {item.hour} userid={currentUserId}
                profileImg={"https://raw.githubusercontent.com/KholodKhadeja/my-success-client/main/src/images/profile-img.png"}/>
                )))}
  </div>
  <div className='pagination-cont'>
    {/* <Pagination size="sm">{items}</Pagination> */}
  </div>
</div>
</Fragment>
    );
}

export default LessonsPage;
