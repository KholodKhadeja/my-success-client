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
