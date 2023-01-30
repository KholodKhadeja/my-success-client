import React from 'react';
import "./titleStyling.scss";

const TitleFunction = ({text}) => {
    return (
        <div className='title-styling'>
            <div className='title-bar'>&nbsp;</div>
            <p className='title-text fs-2'>{text}</p>
        </div>
    );
}

export default TitleFunction;
