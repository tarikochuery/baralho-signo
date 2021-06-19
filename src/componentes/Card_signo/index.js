import React from 'react';
import './style.css';

const Card_signo = (props) => (
    <div className='card-container'>
        <div className='flipper'>
            <div className='card-container-front'>
                <p>{props.nome}</p>
                <img alt={props.nome} src={props.imagem} />
                <p className='data'>{props.dataInicio} - {props.dataFim}</p>
            </div>
            <div className='card-container-back'>
                <p>{props.nome}</p>
                <p>Aqui abaixo temos a descrição do nosso signo</p>
            </div>
        </div>
    </div>
)

export default Card_signo;