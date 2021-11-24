import React, {cloneElement, Children} from "react";
import FamiliaMebro from "./FamiliaMebro";

export default function(props) {
    return (
        <div>
            {
                Children.map(props.children , (child)=> {
                    return cloneElement(child, props)
                })
            }
            
        </div>
    )
}