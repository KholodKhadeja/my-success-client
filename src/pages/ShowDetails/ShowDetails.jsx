import React, { Fragment } from 'react';
import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import "./showdetails.scss";

const ShowDetails = () => {
    return (
<Fragment>
                   <span>
                         <TitleFunction text={"הצג פרטים"}/></span><div className='show-details-page-main-container'>
                <div className='show-details-page-img-cont'>
                      <img className='show-details-page-img' src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/profile-img.png?raw=true" 
                      alt="profile image"/>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="show-details-page-img-icon bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
</div>
<div className='show-details-page-details-rows'>
        <div className='show-details-page-details-row'>
               <p>ח'ולוד ח'דיגה</p>
               <p>kholod.khadeja@hotmail.com</p>
         </div>
         <div className='show-details-page-details-row'>
               <p>מנהל מערכת</p>
               <p>כיתה ח'</p>
         </div>
     </div>
        </div>
        </Fragment>
    );
}

export default ShowDetails;
