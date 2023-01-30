import React, { Fragment } from 'react';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import WhyToLearnComponent from '../../components/WhyToLearnSliderComponent/WhyToLearnComponent';
import LessonsSliderSection from '../../components/LessonsSliderSection/LessonsSliderSection';
import SaysAboutUsSection from '../../components/SaysAboutUseSection/SaysAboutUsSection';

const Homepage = () => {
    return (
        <Fragment>
            <HeaderSection />
            <WhyToLearnComponent />
            <LessonsSliderSection />
            <SaysAboutUsSection />
        </Fragment>
    );
}

export default Homepage;
