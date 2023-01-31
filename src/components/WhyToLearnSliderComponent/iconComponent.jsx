import "./whytolearn.scss";

const IconComponent = ({img, text}) => {
    return (
        <div className="iconcomp">
            <img src={img} alt={text} />
            <span>{text}</span>
        </div>
    );
}

export default IconComponent;
