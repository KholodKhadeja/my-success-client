import { Fragment } from "react";
import "./favlessons.scss";
import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import FavCardComponent from "components/CardComponent/FavCardComponent";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';


let favUserLessonsArray=[], userId,originalId,profileImg;
const FavLessonPage = () => {
   let [userLessonsArray, setUserLessonsArray] = useState(favUserLessonsArray);
   const loggedIn=useSelector((state)=>state.auth.loggedIn);
   const userData = useSelector((state)=>state.auth.userData);
   
   const [searchWord, setSearchWord] = useState("");

   useEffect(() => {
    try{
      userId=userData.id;
      originalId=userId;
    }catch(err){
    }
 }, [loggedIn]);

 useEffect(() => {
  (async()=>{
  try{
      let { data } = await axios.get(`users/getuserbyid/${originalId}`);
      profileImg=data.profileImg;
      favUserLessonsArray=JSON.parse(JSON.stringify(data.favlessons));
     setUserLessonsArray(favUserLessonsArray);
  }catch(err){
  }
  })();
  }, [originalId]);

   useEffect(() => {
    let regex = new RegExp(searchWord, "i"); 
    let lessonArrCopy = JSON.parse(JSON.stringify(favUserLessonsArray)); 
    lessonArrCopy =  lessonArrCopy.filter((item) => regex.test(item.subject));
    setUserLessonsArray(lessonArrCopy);
  }, [searchWord]);

  const handleSearchWordChange =(ev)=>{
    setSearchWord(ev.target.value);
    }
    return (
<Fragment>
<div className='lessons-section mini-large-section'>
<div className="upper-div">
     <span>
     <TitleFunction text={"השיעורים המועדפים"}/></span>
       <div className="input-group mb-3 lessons-input-group">
         <input type="text" className="form-control" aria-label="Sizing example input" 
         aria-describedby="inputGroup-sizing-default" value={searchWord} onChange={handleSearchWordChange} placeholder="חיפוש לפי שם מקצוע" />
        <span className="input-group-text" id="inputGroup-sizing-default">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
</span>
</div></div></div>
<div className='mt-5 lessons-div-lessons'> 
{
  favUserLessonsArray.length===0 &&(
    <div className="spinnerName">
    <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
  </div>
  )
}
{ userLessonsArray.map((item, index) => (
              <FavCardComponent key={"index"+item._id} teacherid={item.teacherId} 
              topic={item.topic}
               subject={item.subject}
               date={item.date}
                hour = {item.hour}  profileImg={profileImg}
                learningLevel={item.learningLevel} userid={originalId}
                lessonid={item._id}  zoomLink={item.zoomLink}/>)
 )}

  </div>
        </Fragment>
    );
}

export default FavLessonPage;
