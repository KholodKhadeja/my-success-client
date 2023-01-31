import "./whytolearn.scss";
import TitleFunction from '../../partial/TitleComponent/TitleFunction';
import IconComponent from "./iconComponent";


const WhyToLearnComponent = () => {
    return (
        <div className='full-height-section why-to-learn'>
            <TitleFunction text={"למה ללמוד אצלנו?"}/>
            <div className="icons-slider">
                
                 <IconComponent img={"https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/slider1.png?raw=true"}
                  text={"לימודים בחינם"} />

                  <IconComponent img={"https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/slider2.png?raw=true"}
                  text={"שיעורים on demand"}/>

                  <IconComponent img={"https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/slider3.png?raw=true"}
                  text={"פרטיים /בקבוצות"}/>

<IconComponent img={"https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/slider4.png?raw=true"}
                  text={"מורים  הטובים ביותר"}/>
  
  <IconComponent img={"https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/slider5.png?raw=true"}
                  text={"מרטונים  ולילות לבנים"}/>
 <br/> <br/> <br/>
            </div>
        </div>
    );
}

export default WhyToLearnComponent;
