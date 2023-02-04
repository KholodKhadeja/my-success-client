import "./saysaboutystyling.scss";

const SliderItem = ({content}) => {
    return (
        <div className='quoete-card shadow-lg p-3 mb-5 bg-body rounded w-25'>
            <img src="" alt="" className='quoete-card-img1'/>
            <p className='quoete-card-text'>{content}</p>
            <img src="" alt="" className='quoete-card-img2'/>
        </div>
    );
}

export default SliderItem;
