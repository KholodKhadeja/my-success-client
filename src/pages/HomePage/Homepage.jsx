import { Fragment , useRef, useEffect, useState} from 'react';
import HeaderSection from '../../components/HeaderSection/HeaderSection';
import WhyToLearnComponent from '../../components/WhyToLearnSliderComponent/WhyToLearnComponent';
import LessonsSliderSection from '../../components/LessonsSliderSection/LessonsSliderSection';
import SaysAboutUsSection from '../../components/SaysAboutUseSection/SaysAboutUsSection';


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
        <div>
            {/* <div key={sections[0].id} ref={registerRef[0]}> */}
                 <HeaderSection />
                 {/* </div> */}
          {/* <div key={sections[1].id} ref={registerRef[1]}>  */}
           <WhyToLearnComponent  />
           {/* </div> */}
           {/* <div key={sections[2].id} ref={registerRef[2]}> */}
            <LessonsSliderSection />
            {/* </div> */}
            {/* <div key={sections[3].id} ref={registerRef[3]}> */}
                <SaysAboutUsSection />
                {/* </div> */}
        </div>


// import React, { useState, useRef } from "react";

// const App = () => {
//   const [currentComponent, setCurrentComponent] = useState(0);
//   const components = [<Component1 />, <Component2 />, <Component3 />];
//   const containerRef = useRef();

//   const handleScroll = () => {
//     if (containerRef.current.scrollTop + containerRef.current.clientHeight >= containerRef.current.scrollHeight) {
//       setCurrentComponent(prevComponent => (prevComponent + 1) % components.length);
//     }
//   };

//   return (
//     <div ref={containerRef} onScroll={handleScroll}>
//       {components[currentComponent]}
//     </div>
//   );
// };

// export default App;


    );
}

export default Homepage;
