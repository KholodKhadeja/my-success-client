import "./lessoncompstyling.scss";
import TitleFunction from "../../partial/TitleComponent/TitleFunction";
import BasicCardComponent from "components/CardComponent/BasicCardComponent";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

let OriginalLessonsArray=[];
const LessonsSliderSection = () => {
const [lessonsArr, setLessonsArr]=  useState(OriginalLessonsArray);
const [searchInput, setSearchInput] = useState("");
useEffect(() => {
    (async () => {
      try {
        let { data } = await axios.get("/lessons");
        OriginalLessonsArray = data;
        setLessonsArr(OriginalLessonsArray);
      } catch (err) {
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
    })();
  }, []);


const handleSearchInputChange = (ev) =>{
   setSearchInput(ev.target.value);
}
let emptyString="";

return (
        <div className='large-section lessons-section'>
           <div className="upper-div">
            <span>
                 <TitleFunction text={"שיעורים"}/></span>
           </div>
           
           <div className="lesson-div d-flex justify-content-around">
           {lessonsArr.slice(0, 3).map((item, index) => (
              <BasicCardComponent key={"card"+item._id} teacherid={item.teacherId} 
              topic={item.topic}
               subject={item.subject}
               date={item.date}
                hour = {item.hour} zoomLink={item.zoomLink}
                profileImg={"https://raw.githubusercontent.com/KholodKhadeja/my-success-client/main/src/images/profile-img.png"}/>
                ))}
           </div>

           <Link className="view-more-lessons" to="/lessons">
            <p>ראו עוד</p>
           </Link>
           <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        
    );
}

export default LessonsSliderSection;
