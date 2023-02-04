import { Fragment , useRef, useEffect, useState} from 'react';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import WhyToLearnComponent from '../../components/WhyToLearnSliderComponent/WhyToLearnComponent';
import LessonsSliderSection from '../../components/LessonsSliderSection/LessonsSliderSection';
import SaysAboutUsSection from '../../components/SaysAboutUseSection/SaysAboutUsSection';
import Footer from '../../components/Footer/Footer';


const Homepage = () => {
// const sections = [
//  { id:"section1"},
// { id: "section2"},
// {id: "section3"},
// {id: "section4"}]

// const [currentSection, setCurrentSection] = useState(0);
// const sectionRefs = useRef([]);
// sectionRefs.current = [];

// const registerRef = i => element => {
//     if (element !== null) {
//       sectionRefs.current[i] = element;
//     }
//   };

//   useEffect(() => {
//     const handleScroll = e => {
//       if (e.deltaY > 0) {
//         setCurrentSection(currentSection + 1);
//       } else {
//         setCurrentSection(currentSection - 1);
//       }
//     };

//     window.addEventListener("wheel", handleScroll);
//     return () => window.removeEventListener("wheel", handleScroll);
//   }, [currentSection]);

//   useEffect(() => {
//     const currentSectionRef = sectionRefs.current[currentSection];
//     window.scrollTo({
//       top: currentSectionRef.offsetTop,
//       behavior: "smooth"
//     });
//   }, [currentSection]);

        return (
        <div className='home-page-main-class'>
            <HeaderSection />
           <WhyToLearnComponent  />
            <LessonsSliderSection />
                <SaysAboutUsSection />
                <Footer />
        </div>


    );
}

export default Homepage;
