import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import atob from "atob";
import { toast } from "react-toastify";

import "./showdetails.scss";


const ShowDetails = () => {
    let id;
    const loggedIn=useSelector((state)=>state.auth.loggedIn);
    const userData = useSelector((state)=>state.auth.userData);

   const [userDetails, setUserDetails] = useState({
    firstname:"",
    lastname:"",
    email:"",
    role:"",
    studentclass:"",
    specialization:"",
    profileImg:"https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/profile-img.png?raw=true"
   });

useEffect(() => {
   try{
     id=userData.id;
   }catch(err){

   }
}, [loggedIn]);


useEffect(() => {
(async()=>{
try{
    let { data } = await axios.get(`users/getuserbyid/${id}`);
     setUserDetails({
       firstname: data.firstname,
       lastname:data.lastname,
       email:data.email,
       role:data.role,
       studentclass: data.studentclass,
       specialization: data.specialization,
       profileImg:data.profileImg,
     });
}catch(err){
    toast.error('שגיאה בטעינת נתונים', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
})();
}, [id]);

return (
<Fragment>
     <span>
    <TitleFunction text={"הצג פרטים"}/></span><div className='show-details-page-main-container'>
    <div className='show-details-page-img-cont'>
    <img className='show-details-page-img' src={userDetails.profileImg} 
     alt="profile image"/>
</div>
<div className='show-details-page-details-rows'>
        <div className='show-details-page-details-row'>
               <p> {userDetails.firstname} {userDetails.lastname}</p>
               <p> {userDetails.email} </p>
         </div>
         <div className='show-details-page-details-row'>
               <p>{userDetails.role} </p>
            <p>{userDetails.studentclass}{userDetails.specialization} </p>
         </div>
     </div>
        </div>
        </Fragment>
    );
}

export default ShowDetails;
