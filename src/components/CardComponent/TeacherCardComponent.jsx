import React, { Fragment } from 'react';
import { useState } from 'react';
import "./card-styling.scss";


const TeacherCardComponent = ({cardNum}) => {
  let basicPath="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/empty-star.png?raw=true";
const [imagePath, setImagePath] =  useState(basicPath);

// const switchImg =()=>{
// basicPath="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/signed-star.png?raw=true";
// setImagePath(basicPath);
// }
    return (
        <Fragment>
            {
        cardNum==0 && <div className='lesson-card h-25'>
            <div className='teacher-btns-div'>
                <img id="star-img" src={imagePath}
                 alt="wishlist star" onClick={switchImg}/>
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
  <button className="sign-up-lesson-btn">הרשמה</button>
</div>
</div>
}
{
 cardNum!= 0 && <div className='lesson-card2 h-25'>
<div className='star-section'>
    <img src={imagePath}
    alt="wishlist star" onClick={switchImg}/>
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
<button class="sign-up-lesson-btn">הרשמה</button>
</div>
</div>
}
</Fragment>
    );
}

export default TeacherCardComponent;
