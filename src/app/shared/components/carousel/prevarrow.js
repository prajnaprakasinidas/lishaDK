function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green", top: "100%", left: "95%", right: "0" }}
            onClick={onClick}
        />
    );
}

export default PrevArrow;