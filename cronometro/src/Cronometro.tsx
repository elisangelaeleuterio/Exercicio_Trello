import React, { useState, useEffect } from "react";
import "./Cronometro.css";

const Cronometro: React.FC = () => {
  const [tempo, setTempo] = useState<number>(0);
  const [rodando, setRodando] = useState<boolean>(false);

  useEffect(() => {
    let intervalo: number | null = null;

    if (rodando) {
      intervalo = setInterval(() => {
        setTempo(tempoAnterior => tempoAnterior + 10);
      }, 10);
    } else if (intervalo) {
      clearInterval(intervalo);
    }

    return () => {
      if (intervalo) clearInterval(intervalo);
    };
  }, [rodando]);

  const iniciar = () => setRodando(true);
  const pausar = () => setRodando(false);
  const resetar = () => {
    setRodando(false);
    setTempo(0);
  };

  // Formata o tempo em horas:minutos:segundos.centésimos
  const formatarTempo = () => {
    const milissegundos = `0${Math.floor((tempo % 1000) / 10)}`.slice(-2);
    const segundos = `0${Math.floor((tempo / 1000) % 60)}`.slice(-2);
    const minutos = `0${Math.floor((tempo / 60000) % 60)}`.slice(-2);
    const horas = `0${Math.floor(tempo / 3600000)}`.slice(-2);

    return `${horas}:${minutos}:${segundos}.${milissegundos}`;
  };

  return (
    <div className={`cronometro-container ${rodando ? 'cronometro-rodando' : ''}`}>
      <h2 className="cronometro-titulo">Cronômetro</h2>
      <div className="cronometro-display">{formatarTempo()}</div>
      <div className="cronometro-botoes">
        <button
          onClick={iniciar}
          className="botao botao-iniciar"
          disabled={rodando}
        >
          Iniciar
        </button>
        <button
          onClick={pausar}
          className="botao botao-pausar"
          disabled={!rodando}
        >
          Pausar
        </button>
        <button
          onClick={resetar}
          className="botao botao-resetar"
        >
          Resetar
        </button>
      </div>
    </div>
  );
};

export default Cronometro;

