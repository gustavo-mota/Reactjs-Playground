import React from "react";
import Param from './componets/Param'
import Aleatorio from "./componets/Aleatorio";
import Card from "./layout/Card";
import ListaAlunos from "./componets/ListaAlunos";
import './App.css';
import Familia from "./componets/Familia";
import FamiliaMebro from "./componets/FamiliaMebro";

export default function App(props){
    return (
        <div className='App' >
            <div className='Cards' >
                <Card titulo="Fundamentos React" color="#E94C6F">
                    <Aleatorio max={10} min={5}></Aleatorio>
                </Card>
                <Card titulo='Familia' color="#A84C">
                    <Familia sobrenome="da Silva">
                        <FamiliaMebro 
                            nome='Pedro'>
                        </FamiliaMebro>
                    </Familia>
                </Card>
                <Card>
                    <ListaAlunos></ListaAlunos>
                </Card>
            </div>
        </div>
        
    );
}