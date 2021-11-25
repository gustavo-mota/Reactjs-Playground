import React, {useState} from "react";
import IndiretaFIlho from "./IndiretaFIlho";

export default props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [bool, setBool] = useState(false)
    function fornecerInfos(nome, idade, bool){
        setNome(nome)
        setIdade(idade)
        setBool(bool)
        //console.log(nome, idade, bool)
        console.log(nome, idade, bool)
    }
    return (
        <div>
            <div>
                <span>
                    {nome}
                </span>
                <span>{idade}</span>
                <span>{bool ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFIlho nome='Joao' quandoClicar={fornecerInfos}>
                
            </IndiretaFIlho>
        </div> 
    )
}