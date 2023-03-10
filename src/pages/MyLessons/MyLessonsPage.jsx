import "./MyLessonStyling.scss";
import CardComponent from "../../components/CardComponent/CardComponent";
import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";
import { Fragment } from "react";
import TitleFunction from "../../partial/TitleComponent/TitleFunction";
import TeacherCardComponent from "../../components/CardComponent/TeacherCardComponent";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import TitleFunctionSmall from "../../partial/TitleComponent/TitleFunctionSmall";

let allMyLessons = [];
const MyLessonsPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showSec, setShowSec] = useState(false);
  const handleCloseSec = () => setShowSec(false);
  const handleShowSec = () => setShowSec(true);

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
      </Pagination.Item>
    );
  }
  return (
    <Fragment>
      <div className="large-section lessons-section">
        <div className="upper-div">
          <span>
            <TitleFunction text={"השיעורים שלי"} />
          </span>
          <div className="my-lessons-upper-left-div">
            <Button className="add-lesson-btn mb-3" onClick={handleShow}>
              הוספת שיעור
            </Button>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"  />
              <span className="input-group-text" id="inputGroup-sizing-default">
                <svg  xmlns="http://www.w3.org/2000/svg"   width="16"  height="16"   fill="currentColor"  className="bi bi-search" viewBox="0 0 16 16" >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
       
        <div className="lessons-div-lessons">
          {/* for students show this */}
          {/* <CardComponent key={0}/> */}
          {/* for teachers show this */}
          <TeacherCardComponent subject={"מתמטיקה"} topic={"היקף עיגול"} teachername={"מרווה נאטור"} date={"24-01-2023"}
          hour={"15:00"} learningLevel={"3"} zoomLink={" "}/>
           <TeacherCardComponent subject={"אנגלית"} topic={"הבנת הנקרא G"} teachername={"אמירה מנסור"} 
           date={"25-01-2023"} hour={"15:00"} learningLevel={"4"}/>

        </div>
        {/* <div className='pagination-cont'>
            <Pagination size="sm">{items}</Pagination>
          </div> */}
      </div>

      {/* THIS IS THE MODAL */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>הוספת שיעור</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>
            <TitleFunctionSmall className="title-text-sec" text={"הוספת שיעור"} />
          </span> 
          <br />
          <Form.Control type="text" className="add-lesson-inputs mb-1" placeholder="שם השיעור"  />
          <Form.Control type="text" className="add-lesson-inputs mb-1" placeholder="נושא השיעור"   />
          {/* <Form.Select aria-label="Default select example" className="add-lesson-inputs mb-1">
      <option>יום</option>
      <option value="1">א</option>
      <option value="2">ב</option>
      <option value="3">ג</option>
      <option value="4">ד</option>
      <option value="5">ה</option>
      <option value="6">ו</option>
      <option value="7">שבת</option>
    </Form.Select> */}

   <DatePicker
      selected={selectedDate}
      onChange={date => setSelectedDate(date)}
      dateFormat="yyyy-mm-dd"
      placeholderText="בחר תאריך"
      className="form-control add-lesson-inputs mb-1"
      locale="he"
      withPortal
    />
          <Form.Select aria-label="Default select example" className="add-lesson-inputs mb-1">
      <option>רמת הלימוד</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Form.Select>
          <Form.Control type="text" className="add-lesson-inputs mb-1" placeholder="קישור לזום"  />
        </Modal.Body>
        <Modal.Footer>
          <Button className="add-lesson-btn" onClick={handleClose}>
            הוספת שיעור
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            ביטול
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default MyLessonsPage;
