import React from "react";

function Param(params){
    console.log(params)
    return (
        <div>
            <h2>{params.Titulo}</h2>
            <h3>{params.subtitulo}</h3>
        </div>
    )
}

export default Param;