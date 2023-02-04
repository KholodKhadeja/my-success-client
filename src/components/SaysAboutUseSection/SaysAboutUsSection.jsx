import React from 'react';
import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import "./saysaboutystyling.scss";
import SliderItem from './SliderItem';
const SaysAboutUsSection = () => {
    return (
        <div className='large-section main-div-says-about-us'>
            <TitleFunction text={"מה אומרים עלינו?"} />
            <div className='quoete-card-slider'>
            <SliderItem num={1} content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
            <SliderItem num={2} content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
            <SliderItem  num={3} content={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/>
           <img src=""/>
            </div>
        </div>
    );
}

export default SaysAboutUsSection;
