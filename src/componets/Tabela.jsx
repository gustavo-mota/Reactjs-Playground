import React from "react";
import alunos from "../data/alunos";
import "./Tabela.css"
export default (props) => {
    
    const TabelaAlunos = alunos.map( (aluno, i) => {
        return (
            <tr key={aluno.id} className={i % 2 == 0 ? 'Par' : 'Impar'}>
                <th>{aluno.id}</th>
                <th>{aluno.nome}</th>
                <th>{aluno.nota}</th>
            </tr>
        )}
    )
    return (
        <div className="Tabela">
            <table border='1' id='alunos'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Nota</th>
                    </tr>
                </thead>
                <tbody>
                    {TabelaAlunos}
                </tbody>
            </table>
        </div>
    )
}