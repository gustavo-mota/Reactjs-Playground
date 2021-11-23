import React from "react";

export default function(props){
    const max = props.max;
    const min = props.min;
    return (
        Math.random() * (max - min) + min
    )
}