import { Fragment , useRef } from 'react';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import WhyToLearnComponent from '../../components/WhyToLearnSliderComponent/WhyToLearnComponent';
import LessonsSliderSection from '../../components/LessonsSliderSection/LessonsSliderSection';
import SaysAboutUsSection from '../../components/SaysAboutUseSection/SaysAboutUsSection';


const Homepage = () => {
        return (
        <div>
            <HeaderSection />
            <WhyToLearnComponent />
            <LessonsSliderSection />
            <SaysAboutUsSection />
        </div>
    );
}

export default Homepage;
