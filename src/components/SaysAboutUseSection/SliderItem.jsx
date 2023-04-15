import { Fragment } from "react";

const SliderItem = ({num, content}) => {
    return (
        <Fragment>
        { num===1 &&<div className='quoete-card shadow p-3 mb-4'>
            <img src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/Get%20Quote.png?raw=true" alt="" className='quoete-card-img1'/>
            <p className='quoete-card-text'>{content}</p>
            <div className='quoete-card-img2'>
            <img src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/Quote%20Left.png?raw=true" alt="" />
            </div>  </div>}
           {num===2 &&<div className='quoete-card quoete-card-2 shadow p-3 mb-4'>
                    <img src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/Get%20Quote.png?raw=true" alt="" className='quoete-card-img1'/>
                    <p className='quoete-card-text'>{content}</p>
                    <div className='quoete-card-img2'>
                    <img src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/Quote%20Left.png?raw=true" alt="" />
                    </div>  </div>
}
{num===3 &&<div className='quoete-card quoete-card-3 shadow p-3 mb-4'>
                    <img src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/Get%20Quote.png?raw=true" alt="" className='quoete-card-img1'/>
                    <p className='quoete-card-text'>{content}</p>
                    <div className='quoete-card-img2'>
                    <img src="https://github.com/KholodKhadeja/my-success-client/blob/main/src/images/Quote%20Left.png?raw=true" alt="" />
                    </div>  </div>
}
                    </Fragment>
    );
}

export default SliderItem;
