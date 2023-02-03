import "./lessoncompstyling.scss";
import TitleFunction from "../../partial/TitleComponent/TitleFunction";
import CardComponent from "../CardComponent/CardComponent";

const LessonsSliderSection = () => {
    return (
        <div className='large-section lessons-section'>
           <div className="upper-div">
            <span>
                 <TitleFunction text={"שיעורים"}/></span>
                 <div className="input-group mb-3 w-25">
                 <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                <span className="input-group-text" id="inputGroup-sizing-default">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
                </span>
</div>
           </div>
           
           <div className="lesson-div d-flex justify-content-around">
            <CardComponent cardNum={0}/>
            <CardComponent cardNum={1}/>
            <CardComponent cardNum={2}/>
            <CardComponent cardNum={3}/>
           </div>

           <div className="view-more-lessons">
            <p>ראו עוד</p>
           </div>
        </div>
    );
}

export default LessonsSliderSection;
