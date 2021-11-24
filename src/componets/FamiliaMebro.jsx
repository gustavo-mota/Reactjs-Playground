import React, {cloneElement} from "react";

export default function(props){
    return(
        <span>{props.nome + ' ' + props.sobrenome + ' ' + props.parentesco}</span>
    )
}