import React, { Fragment } from 'react';
import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import CardComponent from '../../components/CardComponent/CardComponent';
import "./LessonsPageStyling.scss";
import Pagination from 'react-bootstrap/Pagination';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from 'react-router-dom';



let OriginalLessonsArray=[];
const LessonsPage = () => {
  let {search}=useParams();
const [lessonsArr, setLessonsArr]=  useState(OriginalLessonsArray);
const [searchWord, setSearchWord] = useState(search);

useEffect(() => {
  let regex = new RegExp(searchWord, "i"); 
  let lessonArrCopy = JSON.parse(JSON.stringify(OriginalLessonsArray)); 
  console.log("original", OriginalLessonsArray);
  console.log("the copy", lessonArrCopy);
  lessonArrCopy =  lessonArrCopy.filter((item) => regex.test(item.subject));
  setLessonsArr(lessonArrCopy);
}, [searchWord]);

useEffect(() => {
  (async () => {
    try {
      let { data } = await axios.get("/lessons");
      OriginalLessonsArray = data; 
      if(search==="" || search===null){
        let lessonArrCopy = JSON.parse(JSON.stringify(OriginalLessonsArray)); 
        setLessonsArr(lessonArrCopy);
      }
     else{
      setLessonsArr(OriginalLessonsArray);
     }
    } catch (err) {
      toast.error("😭 Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  })();
}, []);





let [active, setActive] = useState(1);


let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
    {number}
    </Pagination.Item>,
  );
}

const handleSearchWordChange =(ev)=>{
  setSearchWord(ev.target.value);
  }
return(
<Fragment>
<div className='large-section lessons-section'>
<div className="upper-div">
            <span>
                 <TitleFunction text={"שיעורים"}/></span>
                 <div className="input-group mb-3 lessons-input-group">
                 <input type="text" className="form-control" value={searchWord} onChange={handleSearchWordChange} placeholder='חיפוש לפי מקצוע'/>
                <span className="input-group-text" id="inputGroup-sizing-default">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
</span>
</div></div>

<div className='lessons-div-lessons-page'> 
{lessonsArr.map((item, index) => (
              <CardComponent key={item._id} teacherid={item.teacherId} 
              topic={item.topic}
               subject={item.subject}
               date={item.date}
                hour = {item.hour}/>
                ))}
  </div>
  <div className='pagination-cont'>
    {/* <Pagination size="sm">{items}</Pagination> */}
  </div>
</div>
</Fragment>
    );
}

export default LessonsPage;
