import React from "react";
import Param from './componets/Param'
import Aleatorio from "./componets/Aleatorio";
import Card from "./layout/Card";
import ListaAlunos from "./componets/ListaAlunos";
import Tabela from "./componets/Tabela";
import './App.css';
import UsuarioInfo from "./componets/Condicional/UsuarioInfo";
import Familia from "./componets/Familia";
import FamiliaMebro from "./componets/FamiliaMebro";
import ParImpar from "./componets/Condicional/ParImpar";
import DiretaPai from "./comunicacao/DiretaPai";
import IndiretaPai from "./comunicacao/IndiretaPai";
import Input from "./componets/Formulario/Input";
import Sorteio from "./componets/megasena/Sorteio";

export default function App(props){
    return (
        <div className='App' >
            <div className='Cards' >
                <Card titulo="Fundamentos React" color="#E94C6F">
                    <Aleatorio max={10} min={5}></Aleatorio>
                </Card>
                <Card titulo='Familia' color="#A84C">
                    <Familia sobrenome="Mota">
                        <FamiliaMebro 
                            nome='Gaby'>
                        </FamiliaMebro>
                    </Familia>
                </Card>
                <Card titulo="Alunos">
                    <ListaAlunos></ListaAlunos>
                </Card>
                <Card titulo="Tabela de Alunos" color="#399">
                    <Tabela></Tabela>
                </Card>
                <Card titulo="Condicional" color='#690'>
                    <ParImpar numero={3} ></ParImpar>
                    <UsuarioInfo usuario={{nome: 'Hugo'}}></UsuarioInfo>
                </Card>
                <Card>
                    <DiretaPai></DiretaPai>
                </Card>
                <Card>
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card>
                    <Input></Input>
                </Card>
                <Card titulo='Megasena' color='#670'>
                    <Sorteio></Sorteio>
                </Card>
            </div>
        </div>
        
    );
}