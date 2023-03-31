import "./lessoncompstyling.scss";
import TitleFunction from "../../partial/TitleComponent/TitleFunction";
import CardComponent from "../CardComponent/CardComponent";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

let OriginalLessonsArray=[];
const LessonsSliderSection = () => {
const [lessonsArr, setLessonsArr]=  useState(OriginalLessonsArray);
useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/lessons");
        OriginalLessonsArray = data;
        setLessonsArr(lessonsArr);
        console.log(OriginalLessonsArray);
      } catch (err) {
        toast.error("😭 Something went wrong", {
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

    return (
        <div className='large-section lessons-section'>
           <div className="upper-div">
            <span>
                 <TitleFunction text={"שיעורים"}/></span>
                 <div className="input-group mb-3 w-25">
                 <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                <span className="input-group-text" id="inputGroup-sizing-default">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
                </span>
</div>
           </div>
           
           <div className="lesson-div d-flex justify-content-around">
           {lessonsArr.slice(0, 3).map((item, index) => (
              <CardComponent key={index} teachername={item.teacherid} 
              topic={item.topic}
               subject={item.subject}
               date={item.date}
                hour = {item.hour}/>
                ))}
           </div>

           <Link className="view-more-lessons" to="/">
            <p>ראו עוד</p>
           </Link>
        </div>
    );
}

export default LessonsSliderSection;
