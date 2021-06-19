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
                        dataInicio='20/01' dataFim='18/02' >
                <p className='descricao'>O aquariano é um ser independente, que preza muito por sua liberdade. Ele gosta de conhecer coisas novas, como também pessoas novas.</p>
            </CardSigno>

            <CardSigno nome='Peixes' imagem='assets/peixes.jpg'
                        dataInicio='19/02' dataFim='20/03' >
                <p className='descricao'>Peixes, afinal, é o signo mais romântico do zodíaco, sendo um grande sonhador e zelador dos sonhos daquela pessoa que tanto ama.</p>
            </CardSigno>

            <CardSigno nome='Áries' imagem='assets/aries.jpg'
                        dataInicio='21/03' dataFim='20/04' >
                <p className='descricao'>Os arianos são definidos por sua força, impulsividade e impetuosidade. Ele não reflete ou pensa antes de agir.</p>
            </CardSigno>

            <CardSigno nome='Touro' imagem='assets/touro.jpg'
                        dataInicio='21/04' dataFim='20/05'>
                <p className='descricao'>Os taurinos, em síntese, são muito teimosos e, mais do que isso, eles são muito ciumentos e protetores.</p>
            </CardSigno>

            <CardSigno nome='Gêmeos' imagem='assets/gemeos.jpg'
                        dataInicio='21/05' dataFim='20/06'>
                <p className='descricao'>Um dos signos mais imprevisíveis do zodíaco, é o de gêmeos. Na verdade, você nunca sabe o que pode esperar deles.</p>
            </CardSigno>

            <CardSigno nome='Câncer' imagem='assets/cancer.jpg'
                        dataInicio='21/06' dataFim='22/07'>
                <p className='descricao'>Os cancerianos são muito sensíveis e emotivos, por isso, dão muito valor a intimidade e ao carinho.</p>
            </CardSigno>

            <CardSigno nome='Leão' imagem='assets/leao.jpg'
                        dataInicio='23/07' dataFim='22/08'>
                <p className='descricao'>Os leoninos gostam de chamar a atenção mesmo, pois eles vieram para tomar o lugar que é deles “por direito”.</p>
            </CardSigno>

            <CardSigno nome='Virgem' imagem='assets/virgem.jpg'
                        dataInicio='23/08' dataFim='22/09'>
                <p className='descricao'>O virginiano é um signo que nasceu para o sucesso, e ele fará de tudo para conquistar tudo aquilo que deseja. </p>
            </CardSigno>

            <CardSigno nome='Libra' imagem='assets/libra.jpg'
                        dataInicio='23/09' dataFim='22/10'>
                <p className='descricao'>O libriano evita conflito o máximo que pode, buscando sempre a imparcialidade quando se mete em um debate.</p>
            </CardSigno>

            <CardSigno nome='Escorpião' imagem='assets/escorpiao.jpg'
                        dataInicio='23/10' dataFim='21/11'>
                <p className='descricao'>O escorpião é o signo mais determinado do zodíaco, indo até as última consequências para alcançar aquilo que deseja.</p>
            </CardSigno>

            <CardSigno nome='Sagitário' imagem='assets/sagitario.jpg'
                        dataInicio='22/11' dataFim='21/12'>
                <p className='descricao'>Os sagitarianos, em suma, são pessoas que estão sempre com um sorriso no rosto, buscando o que a de melhor na vida. </p>
            </CardSigno>

            <CardSigno nome='Capricórnio' imagem='assets/capricornio.jpg'
                        dataInicio='22/12' dataFim='19/01'>
                <p className='descricao'>O capricorniano, por outro lado, pode até parecer uma fechado e meio antipático. Porém, ele só é tímido e muito trabalhador. </p>
            </CardSigno>
        </div>
    </div>
)

export default ListaSignos;