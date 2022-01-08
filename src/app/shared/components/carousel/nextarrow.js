function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green", right: "0", top: "100%" }}
            onClick={onClick}
        />
    );
}

export default NextArrow;