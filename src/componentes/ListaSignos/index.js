import React from 'react';
import './style.css';

import CardSigno from '../CardSigno';

const ListaSignos = () => (
    <div className='container'>
        <div className='cabecalho'>
            Baralho de Signos
        </div>

        <div className='lista-container'>
            <CardSigno nome='Aquário' imagem='assets/aquario.jpg'
                        dataInicio='20/01' dataFim='18/02' />

            <CardSigno nome='Peixes' imagem='assets/peixes.jpg'
                        dataInicio='19/02' dataFim='20/03' />

            <CardSigno nome='Áries' imagem='assets/aries.jpg'
                        dataInicio='21/03' dataFim='20/04' />

            <CardSigno nome='Touro' imagem='assets/touro.jpg'
                        dataInicio='21/04' dataFim='20/05' />

            <CardSigno nome='Gêmeos' imagem='assets/gemeos.jpg'
                        dataInicio='21/05' dataFim='20/06' />

            <CardSigno nome='Câncer' imagem='assets/cancer.jpg'
                        dataInicio='21/06' dataFim='22/07' />

            <CardSigno nome='Leão' imagem='assets/leao.jpg'
                        dataInicio='23/07' dataFim='22/08' />

            <CardSigno nome='Virgem' imagem='assets/virgem.jpg'
                        dataInicio='23/08' dataFim='22/09' />

            <CardSigno nome='Libra' imagem='assets/libra.jpg'
                        dataInicio='23/09' dataFim='22/10' />

            <CardSigno nome='Escorpião' imagem='assets/escorpiao.jpg'
                        dataInicio='23/10' dataFim='21/11' />

            <CardSigno nome='Sagitário' imagem='assets/sagitario.jpg'
                        dataInicio='22/11' dataFim='21/12' />

            <CardSigno nome='Capricórnio' imagem='assets/capricornio.jpg'
                        dataInicio='22/12' dataFim='19/01' />
        </div>
    </div>
)

export default ListaSignos;