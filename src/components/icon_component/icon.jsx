import React from "react";
import "./icon.scss";

const icon = (props) => {

    const style = {
        height: props.height,
        width: props.width,
        margin:props.margin
    }
    return (

        <img src={props.src} alt="" style={style} />
        // <svg xmlns={props.src} fill={props.fill} style={style}></svg>


    );
};

export default icon;
