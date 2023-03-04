import React, { Fragment } from 'react';
import { useState } from 'react';
import "./card-styling.scss";
import { NavLink } from "react-router-dom";


const TeacherCardComponent = ({key}) => {
  let basicPath="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/empty-star.png?raw=true";
const [imagePath, setImagePath] =  useState(basicPath);

    return (
    <Fragment>
    {
<div className='my-lesson-card h-25'>
            <div className='teacher-btns-div'>
                <img className='teacher-btns-div-img' src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/Pencil.png?raw=true"
                 alt="edit icon"/>
                   <img className='teacher-btns-div-img' src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/Remove.png?raw=true"
                 alt="delete icon"/>
            </div>
<div className='section-1'>
     <div className='card-img-container'>
           {/* <img src="" alt="teacher name" /> */}
     </div>
     <p className='teacher-name'>שם המורה</p>
</div>
<div className='section-2'>
     <p>
        <span>מקצוע: &nbsp;</span>
        <span>אנגלית, 3יח'</span>
     </p>
     <p>
        <span>נושא: &nbsp;</span>
        <span>הבנת הנקרא C</span>
     </p>
</div>
<div className='section-3'>
<div>
<p>
<span>מתחיל ב:</span>
<span>24/01</span>
<br/>
<span>15:00</span>
</p>
</div>
<NavLink className="enter-lesson-btn" to="/connecttolesson">התחבר</NavLink>


</div>
</div>
}
</Fragment>
    );
}

export default TeacherCardComponent;
