import React from 'react';
import "./titleStyling.scss";

const TitleFunctionSmall = ({text}) => {
    return (
        <div className='title-styling'>
            <div className='title-bar-sec'>&nbsp;</div>
            <span className='title-text-sec'>{text}</span>
        </div>
    );
}

export default TitleFunctionSmall;
