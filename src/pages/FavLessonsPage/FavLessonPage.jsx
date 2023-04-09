import { Fragment } from "react";
import "./favlessons.scss";
import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import CardComponent from "../../components/CardComponent/CardComponent";
import { useState } from "react";

let favUserLessonsArray=[];
const FavLessonPage = () => {
   let [userLessonsArray, setUserLessonsArray] = useState(favUserLessonsArray);
    return (
<Fragment>
<div className='lessons-section mini-large-section'>
<div className="upper-div">
     <span>
     <TitleFunction text={"השיעורים המועדפים"}/></span>
       <div className="input-group mb-3 lessons-input-group">
         <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        <span className="input-group-text" id="inputGroup-sizing-default">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
</span>
</div></div></div>
<div className='mt-5 lessons-div-lessons'> 
{/* <CardComponent />
<CardComponent />
<CardComponent /> */}

  </div>
        </Fragment>
    );
}

export default FavLessonPage;
