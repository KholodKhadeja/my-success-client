import { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import atob from "atob";
import { toast } from "react-toastify";

import "./showdetails.scss";


const ShowDetails = () => {
    let id;
//    let formData = new FormData();
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
     console.log(id,"id");
   }catch(err){

   }
}, [loggedIn]);


useEffect(() => {
(async()=>{
try{
    console.log("entered the async");
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
    console.log(err);
}
})();
}, [id]);

// const uploadImage = ()=>{
//     const input = document.createElement('input');
//     input.type = 'file';
//     input.onchange = e => {
//       const file = e.target.files[0];
//       const reader = new FileReader();
//       reader.readAsDataURL(file);
//       reader.onload = readerEvent => {
//         const content = readerEvent.target.result;
//         const image = document.querySelector('.show-details-page-img');
//         image.src = content;
//       };
//     };
//     input.click();

//       /*proccessing the image to fit the db*/
//       const imageSrc = document.querySelector('.show-details-page-img').src;
//             const dataUrlRegex = /^data:(.+);base64,(.*)$/;
//             const matches =  imageSrc.match(dataUrlRegex);
//             const mimeType = matches[1];
//            const imageData = matches[2];
//            const binaryData = atob(imageData);
//            const uint8Array = new Uint8Array(binaryData.length);
//            for (let i = 0; i < binaryData.length; i++) {
//              uint8Array[i] = binaryData.charCodeAt(i);
//            }
//            const blob = new Blob([uint8Array], { type: mimeType });
//         //    formData.append('image', blob, 'filename.png');
// }

// useEffect(() => {
//   /*the formdata should be sent via axios request to update the image */
//   (async()=>{
//     try{
//     let {data} = await axios.patch(`users/`,{
//         id:userData.id,
//         firstname:userDetails.firstname,
//         lastname:userDetails.lastname,
//         email:userDetails.email,
//         role:userDetails.role,
//         studentclass:userDetails.studentclass,
//         specialization:userDetails.specialization,
//         profileImg:formData,
//     })
//     console.log("this is the data after patch", data);
//     toast.success('Card Was Successfully Updated!', {
//       position: "bottom-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//       });
//   }catch(err){
//     toast.error("Ooops, Card Can't Be Updated!", {
//       position: "bottom-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//       });
//   }
// })();
// }, [formData]);

return (
<Fragment>
     <span>
    <TitleFunction text={"הצג פרטים"}/></span><div className='show-details-page-main-container'>
    <div className='show-details-page-img-cont'>
    <img className='show-details-page-img' src={userDetails.profileImg} 
     alt="profile image"/>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  className="show-details-page-img-icon bi bi-pencil-fill" 
viewBox="0 0 16 16">
<path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
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
