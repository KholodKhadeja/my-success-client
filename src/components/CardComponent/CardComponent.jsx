import React, { Fragment } from 'react';
import { useState } from 'react';
import "./card-styling.scss";


const CardComponent = ({key}) => {
  let basicPath="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/empty-star.png?raw=true";
const [imagePath, setImagePath] =  useState(basicPath);

const [startClicked, setStarClicked] = useState(false);
const switchImg =()=>{
    if(!startClicked){
    setStarClicked(!startClicked);
    basicPath="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/signed-star.png?raw=true";   
}
else{
    setStarClicked(startClicked);
    basicPath="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/empty-star.png?raw=true";
}

setImagePath(basicPath);
}
    return (
        <Fragment>
            {
       <div className='lesson-card h-25'>
            <div className='star-section'>
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
<button type="button" className="sign-up-lesson-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
  הרשמה </button>
</div>
</div>
}

{/* ------------------------------------אישור הרשמה לשיעור -------------------------------------------- */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">אישור הרשמה לשיעור</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      ההרשמה הסתיימה בהצלחה!
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-success" data-bs-dismiss="modal">אישור</button>
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">סגירה</button>
      </div>
    </div>
  </div>
</div>
</Fragment>
    );
}

export default CardComponent;
