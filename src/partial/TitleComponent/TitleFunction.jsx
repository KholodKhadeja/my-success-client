import React from 'react';
import "./titleStyling.scss";

const TitleFunction = ({text}) => {
    return (
        <div className='title-styling'>
            <div className='title-bar'>&nbsp;</div>
            <span className='title-text'>{text}</span>
        </div>
    );
}

export default TitleFunction;
