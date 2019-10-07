import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
    const [estado, setEstado] = useState('INICIANDO');
    const [palpite, setPalpite] = useState(150);
    const [numPalpites, setNumPalpite] = useState(1);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(300);

    const iniciarGame = () => {
        setEstado('RODANDO');
        setPalpite(150);
        setNumPalpite(1);
        setMax(300);
        setMin(0);
    }

    if (estado === 'INICIANDO') {
        return <button onClick={iniciarGame}>Começar</button>
    }

    const menor = () => {
        setNumPalpite(numPalpites + 1);
        setMax(palpite);
        const proximoPalpite = parseInt((palpite - min) / 2) + min
        setPalpite(proximoPalpite);
    }

    const maior = () => {
        setNumPalpite(numPalpites + 1);
        setMin(palpite);
        const proximoPalpite = parseInt((palpite - min) / 2) + palpite
        setPalpite(proximoPalpite);
    }

    const acertou = () => {
        setEstado('FIM')
    }

    if (estado === 'FIM') {
        return (
            <div>
                <p>Total de palpites: {numPalpites}</p>
                <button onClick={iniciarGame}>Iniciar Novamente</button>
            </div>
        )
    }

    return (
        <div className='container'>
            <p>O número é : {palpite}</p>
            <p>Min: {min} / Max: {max}</p>
            <div>
                <button onClick={menor}>MENOR</button>
                <button onClick={acertou}>ACERTOU</button>
                <button onClick={maior}>MAIOR</button>
            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
