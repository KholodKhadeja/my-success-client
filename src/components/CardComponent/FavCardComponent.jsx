import React, { Fragment } from 'react';
import { useState, useEffect } from 'react';
import "./card-styling.scss";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const FavCardComponent = ({key,teacherid,topic, subject,date, hour, profileImg}) => {
  const userRole = useSelector((state)=>state.auth.role);
  const loggedIn=useSelector((state)=>state.auth.loggedIn);
  const [profileImgS, setProfileImg] = useState(profileImg);
  let basicPath="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/signed-star.png?raw=true";
const [imagePath, setImagePath] =  useState(basicPath);
const [startClicked, setStarClicked] = useState(true);
const [actualteachername, setTeachername] = useState({
firstname:"",
lastname:""
});

useEffect(() => {
  loggedIn &&(
  (async()=>{
    try{
        let { data } = await axios.get(`users/getuserbyid/${teacherid}`);
       setProfileImg(data.profileImg);
        setTeachername({
           firstname: data.firstname,
           lastname:data.lastname,
         });
    }catch(err){
      toast.error('לא מצליח לטעון נתונים, תרענן עמוד', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    })());
}, []);

const switchImg =()=>{
  /*هاي لما يكبس على النجمة عشان يقيم من المفضلة */
    if(startClicked){
    basicPath="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/empty-star.png?raw=true";  
    setStarClicked(false);
}
/*مش المفروض يفوت هون لأنو الدرس رح يطلع من المفضلة بالمررررةةة */
else{
    basicPath="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/signed-star.png?raw=true";  
    setStarClicked(true);
}
setImagePath(basicPath);
}
return (
<Fragment>
       <div className='lesson-card'>
            <div className='star-section'>
              { userRole ==="student" && (<img id="star-img" src={imagePath}
                 alt="wishlist star" onClick={switchImg}/>)
            }

            </div>
            <div className='section-1'>
                 <div className='card-img-container'>
                       <img src={profileImg} alt="teacher name" />
                 </div>
                 <p className="teacher-name">{actualteachername.firstname} {actualteachername.lastname}</p>
            </div>
            <div className='section-2'>
                 <p>
                    <span>מקצוע: &nbsp;</span>
                    <span>{subject}</span>
                 </p>
                 <p>
                    <span>נושא: &nbsp;</span>
                    <span>{topic}</span>
                 </p>
            </div>
<div className='section-3'>
  <div>
    <p>
        <span>מתחיל ב:</span>
        <span>{date.slice(0,9)}</span>
        <br/>
        <span>{new Date(hour).toLocaleTimeString()}</span>
    </p>
  </div>
<button type="button" className="sign-up-lesson-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
  הרשמה </button>
</div>
</div>

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

export default FavCardComponent;
