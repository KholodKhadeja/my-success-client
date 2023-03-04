import React from 'react';
import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import { useState } from 'react';
import "./ConnectToLessonPage.scss";

const ConnectToLessonPage = () => {
  const [lessonName, setLessonName] = useState("");
  const [lessonTiming, setLessonTiming] = useState("היום בשעה 16:00");
  const [lessonZoomLink, setLessonZoomLink] = useState("https://edu-il.zoom.us/j/86008743727");
    return (
        <div>
          <span>
            <TitleFunction text={"התחלת שיעור:" + lessonName} />
          </span>
          <span className="lesson-timing-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-clock-fill" 
          viewBox="0 0 16 16">
         <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
        </svg>
        <p>{lessonTiming}</p>
          </span>
          <iframe className="iframe-class"  src={lessonZoomLink} width="1000" height="400" frameborder="2"></iframe>

        </div>
    );
}

export default ConnectToLessonPage;
