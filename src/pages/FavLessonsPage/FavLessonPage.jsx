import { Fragment } from "react";
import "./favlessons.scss";
import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import CardComponent from "../../components/CardComponent/CardComponent";
import { useState } from "react";

let favUserLessonsArray=[];
const FavLessonPage = () => {
   let [userLessonsArray, setUserLessonsArray] = useState(favUserLessonsArray);

    return (
        <Fragment>
            <span>
                <TitleFunction text={"השיעורים המועדפים"}/></span>
                <div className='lessons-div-lessons'> 
<CardComponent />
<CardComponent />
<CardComponent />

  </div>
        </Fragment>
    );
}

export default FavLessonPage;
