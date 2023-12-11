import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCardById } from "../services/cardService";
import Carta from "../interfaces/Card";

const CardDetails = () => {
  const [carta, setCarta] = useState<Carta | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const buscarCarta = async () => {
      if (id === undefined) return;
      const cartaBuscada = await getCardById(+id);
      if (cartaBuscada === undefined) return;
      setCarta(cartaBuscada);
    };

    buscarCarta();
  }, [id]);

  if (!carta) return <div className="text-center text-lg">Carregando...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        {carta.name} - {carta.class}
      </h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Atributos:</h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(carta.stats).map(([chave, valor]) => (
            <div key={chave} className="flex items-center space-x-2">
              <span className="font-medium capitalize">{chave}:</span>
              <span className="font-bold">{valor}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">História de Fundo:</h3>
        <p className="text-gray-700">{carta.background}</p>
      </div>
    </div>
  );
};

export default CardDetails;
