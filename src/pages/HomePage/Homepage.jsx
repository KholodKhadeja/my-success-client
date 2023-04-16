import HeaderSection from '../../components/HeaderSection/HeaderSection';
import WhyToLearnComponent from '../../components/WhyToLearnSliderComponent/WhyToLearnComponent';
import LessonsSliderSection from '../../components/LessonsSliderSection/LessonsSliderSection';
import SaysAboutUsSection from '../../components/SaysAboutUseSection/SaysAboutUsSection';
import Footer from '../../components/Footer/Footer';


const Homepage = () => {
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
