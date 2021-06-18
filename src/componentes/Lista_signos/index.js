import React from 'react';
import './style.css';

import Card_signo from '../Card_signo';

const Lista_signos = () => (
    <div className='container'>
        <div className='cabecalho'>
            Baralho de Signos
        </div>

        <div className='lista-container'>
            <Card_signo nome='Aquário' imagem='assets/aquario.jpg'
                        dataInicio='20/01' dataFim='18/02' />

            <Card_signo nome='Peixes' imagem='assets/peixes.jpg'
                        dataInicio='19/02' dataFim='20/03' />

            <Card_signo nome='Áries' imagem='assets/aries.jpg'
                        dataInicio='21/03' dataFim='20/04' />

            <Card_signo nome='Touro' imagem='assets/touro.jpg'
                        dataInicio='21/04' dataFim='20/05' />

            <Card_signo nome='Gêmeos' imagem='assets/gemeos.jpg'
                        dataInicio='21/05' dataFim='20/06' />

            <Card_signo nome='Câncer' imagem='assets/cancer.jpg'
                        dataInicio='21/06' dataFim='22/07' />

            <Card_signo nome='Leão' imagem='assets/leao.jpg'
                        dataInicio='23/07' dataFim='22/08' />

            <Card_signo nome='Virgem' imagem='assets/virgem.jpg'
                        dataInicio='23/08' dataFim='22/09' />

            <Card_signo nome='Libra' imagem='assets/libra.jpg'
                        dataInicio='23/09' dataFim='22/10' />

            <Card_signo nome='Escorpião' imagem='assets/escorpiao.jpg'
                        dataInicio='23/10' dataFim='21/11' />

            <Card_signo nome='Sagitário' imagem='assets/sagitario.jpg'
                        dataInicio='22/11' dataFim='21/12' />

            <Card_signo nome='Capricórnio' imagem='assets/capricornio.jpg'
                        dataInicio='22/12' dataFim='19/01' />
        </div>
    </div>
)

export default Lista_signos;