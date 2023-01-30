import React from 'react';
import TitleFunction from '../../partial/TitleComponent/TitleFunction';

const HeaderSection = () => {
    return (
        <div className='fullScreenSection'>
           <img src="" />
           <p>
                <TitleFunction text={"My Success"}/> <br/>
                היא מערכת שיעורים פרטיים/ קבוציים אונליין, במימון מלא של משרד החינוך. <br/>
המערכת מיועדת לתלמידי תיכון שמעוניינים ללמוד שיעורים פרטיים.<br/>
במערכת יש מגוון של מקצועות ושיעורים שהתלמיד יכול להזמין או להירשם אליהם.
           </p>
        </div>
    );
}

export default HeaderSection;

