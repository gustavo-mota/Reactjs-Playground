import React from "react";

export default props => {
    const cb = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (70 - 50)) + 50
    const gerarBool = () => Math.random() > 0.5
    return (
        <div>
            <div>
            Filho
        </div>
        <button onClick={
            function (e){
                props.quandoClicar(props.nome, gerarIdade(), gerarBool())
            }
        }>Fornecer Informações</button>
        </div>
    )
}