import React from "react";
import Param from './componets/Param'
import Aleatorio from "./componets/Aleatorio";
import Card from "./layout/Card";

export default function App(props){
    return (
        <div>
            
            <Card titulo="Fundamentos React">
            <Aleatorio max={10} min={5}></Aleatorio>
            </Card>
        </div>
        
    );
}