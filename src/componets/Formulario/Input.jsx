import React, {useState} from "react";
import "./Input.css";

export default (props) => {
    const [entrada, setEntrada] = useState('Inicial')
    const [mostra, setMostra] = useState('esperando')
    function quandoEntrar(e){
        setEntrada(e.target.value)
    }
    function contagem(e){
        const numero = isInt(e)
        if(numero){
            for(var i=0; i < numero; i++){
                setEntrada(i)
            }
        }else{
            setEntrada('nao int')
        }
    }
    function isInt(numero){
        return parseInt(entrada) ? parseInt(entrada): ''
    }
    return (
        <div>
            <input value={entrada} className='Input' onChange={quandoEntrar} />
            <button onClick={contagem}>Mudar</button>
            <span>{isInt(entrada)}</span>
        </div>
    )
}