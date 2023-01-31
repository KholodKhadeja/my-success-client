import "./whytolearn.scss";

const IconComponent = ({img, text}) => {
    return (
        <div className="iconcomp">
            <br/>
            <img src={img} alt={text} />
            <span className="fs-6 text">{text}</span>
        </div>
    );
}

export default IconComponent;
