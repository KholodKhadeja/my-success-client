import React from 'react';
import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import "./headerStyling.scss";

const HeaderSection = () => {
    return (
        <div className=' full-height-section fullScreenSection container-fluid'>
           <span >
                <TitleFunction text={"My Success"}/> <br/>
                <span  className="intro-parag">
                היא מערכת שיעורים פרטיים/ קבוציים אונליין, במימון מלא של משרד החינוך. <br/>
המערכת מיועדת לתלמידי תיכון שמעוניינים ללמוד שיעורים פרטיים.<br/>
במערכת יש מגוון של מקצועות ושיעורים שהתלמיד יכול להזמין או להירשם אליהם.</span>
           </span>
        </div>
    );
}

export default HeaderSection;

