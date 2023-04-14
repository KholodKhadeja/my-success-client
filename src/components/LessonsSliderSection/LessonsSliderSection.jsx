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
                 <div className="input-group mb-3 w-25">
                 <input type="text" className="form-control" placeholder="הכניסו מילת חיפוש ולחצו" value={searchInput}
          onChange={handleSearchInputChange} />
       
                <span  className="input-group-text" id="inputGroup-sizing-default">
                <Link to={`/lessons/${searchInput}`}>
                <svg   xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
</Link>   </span>
</div>
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

           <Link className="view-more-lessons" to={`/lessons/${emptyString}`}>
            <p>ראו עוד</p>
           </Link>
           <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>
        
    );
}

export default LessonsSliderSection;
