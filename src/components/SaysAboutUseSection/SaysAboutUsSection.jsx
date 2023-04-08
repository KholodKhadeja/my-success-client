import React from 'react';
import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import "./saysaboutystyling.scss";
import SliderItem from './SliderItem';
const SaysAboutUsSection = () => {
    return (
        <div className='large-section main-div-says-about-us'>
            <TitleFunction text={"מה אומרים עלינו?"} />
            <div className='quoete-card-slider'>
            <SliderItem num={1} content=
            {"קל לשימוש, ויש מבחר טוב של שיעורים"}/>
            <SliderItem num={2} content={"בזכות המערכת My success יכלתי ללמוד מכל מקום וזמן ולהצליח"}/>
            <SliderItem  num={3} content={"כל תלמיד בתיכון חייב להכיר את המערכת הזאת."}/>
           <img src=""/>
            </div>
        </div>
    );
}

export default SaysAboutUsSection;
