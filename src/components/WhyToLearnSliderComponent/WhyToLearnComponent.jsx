import "./whytolearn.scss";
import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import IconComponent from "./iconComponent";


const WhyToLearnComponent = () => {
    return (
        <div className='full-height-section why-to-learn'>
            <TitleFunction text={"למה ללמוד אצלנו?"}/>
            <div className="icons-slider">
                 <IconComponent img={} text={} />
                {/* <div className="icon-container">


                </div>
                <div className="icon-scroll-bar">

                </div> */}

            </div>
        </div>
    );
}

export default WhyToLearnComponent;
