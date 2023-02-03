import React from 'react';
import "./card-styling.scss";

const CardComponent = () => {
    return (
        <div className='lesson-card h-50 shadow-lg'>
            <div className='star-section'>
                <img src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/empty-star.png?raw=true" alt="wishlist star"/>
            </div>
            <div className='section-1'>
                 <div className='card-img-container'>
                       {/* <img src="" alt="teacher name" /> */}
                 </div>
                 <p className='teacher-name fs-4'>שם המורה</p>
            </div>
            <div className='section-2 fs-6'>
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
  <button class="sign-up-lesson-btn shadow-sm">הרשמה</button>
</div>
        </div>
    );
}

export default CardComponent;
