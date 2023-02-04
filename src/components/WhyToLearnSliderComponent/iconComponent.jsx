import "./whytolearn.scss";

const IconComponent = ({img, text}) => {
    return (
        <div className="iconcomp">
            <br/>
            <img src={img} alt={text} />
            <span className="fs-7 text">{text}</span>
        </div>
    );
}

export default IconComponent;
