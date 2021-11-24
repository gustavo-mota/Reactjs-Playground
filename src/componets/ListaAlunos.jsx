import React from "react";
import alunos from "../data/alunos";

export default (props) => {
    const li1 = (
        <li>
            {alunos[0].id}) {alunos[0].nome} - {alunos[0].nota}
        </li>
    );
    const li2 = alunos.map((aluno) => {
        return (
            <li>
                {aluno.id}) {aluno.nome} -> {aluno.nota}
            </li>
        )
    })
    return (
        <div>
            <ul>
                {li1}
                {li2}
            </ul>
        </div>
    )
}