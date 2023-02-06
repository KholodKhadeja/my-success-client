import "./MyLessonStyling.scss";
import CardComponent from '../../components/CardComponent/CardComponent';
import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';
import { Fragment } from 'react';
import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import TeacherCardComponent  from '../../components/CardComponent/TeacherCardComponent';

let allMyLessons=[];
const MyLessonsPage = () => {
    const [lessons, setLessons] = useState(allMyLessons);
    let [active, setActive] = useState(1);
    // let [currentPage, setCurrentPage] = useState(active);
    // let lessonsPerPage=12;
    // let lastLessonIndex = currentPage * lessonsPerPage;
    // let firstLessonIndex = lastLessonIndex - lessonsPerPage;
    // currentLessons = lessons.slice(firstLessonIndex, lastLessonIndex); // the new array
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
        {number}
        </Pagination.Item>,
      );
    }
    return (
        <Fragment>
        <div className='large-section lessons-section'>
        <div className="upper-div">
                    <span>
                         <TitleFunction text={"השיעורים שלי"}/></span>
                         <div className='my-lessons-upper-left-div'>
                                <button className="add-lesson-btn mb-3">הוספת שיעור</button>
                         <div className="input-group mb-3">
                         <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        <span className="input-group-text" id="inputGroup-sizing-default">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        </span>
        </div></div>

        </div>
        
        <div className='lessons-div-lessons'> 
        {/* for students show this */}
        {/* <CardComponent key={0}/> */}
        {/* for teachers show this */}
        <TeacherCardComponent />
        <TeacherCardComponent />
        <TeacherCardComponent />
          </div>
          {/* <div className='pagination-cont'>
            <Pagination size="sm">{items}</Pagination>
          </div> */}
        </div>
        </Fragment>
    );
}

export default MyLessonsPage;
