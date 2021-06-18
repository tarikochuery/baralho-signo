import React from 'react';
import './style.css';

const Card_signo = (props) => (
    <div className='card-container'>
        <p>{props.nome}</p>
        <img alt={props.nome} src={props.imagem} />
        <p>{props.dataInicio} - {props.dataFim}</p>
    </div>
)

export default Card_signo;