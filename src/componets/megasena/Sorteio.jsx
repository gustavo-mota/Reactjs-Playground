import React, {useState} from "react";

export default (props) => {
    
    //const [numeros, setNumeros] = useState([])
    const numeros = []
    function sort(numeros){
        for(let i=0; i < 8; i++){
            let sorted = parseInt(Math.random(60)*100)
            console.log(sorted)
            if(sorted in numeros){
                i++
            }else{
                numeros.push(sorted)
                
            }
        }
    }
    return (
        <div>
            {
                sort(numeros)
            }
            {
                numeros.map((numero)=>{
                    return(
                        <p>{numero}</p>
                    )
                    }
                )
            }
            <button onClick={sort(numeros)}>sortear</button>
        </div>
    )
}