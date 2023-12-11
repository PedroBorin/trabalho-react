// components/Card.js
import React from "react";
import  CardInterface from "../interfaces/Card";
import { useNavigate } from "react-router-dom";

const CardComponent = ({
  id,
  name,
  class: className,
  stats,
  background,
}: CardInterface) => {
  const navigation = useNavigate();
  return (
    <div
      className="border border-gray-300 rounded-lg p-4 shadow-md cursor-pointer"
      onClick={() => navigation(`/card/${id}`)}
    >
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-700">Class: {className}</p>
      <div className="text-gray-600">
        <h4 className="font-semibold">Stats:</h4>
        <ul>
          {stats &&  Object.entries(stats).map(([key, value]) => (
            <li key={key}>{`${
              key.charAt(0).toUpperCase() + key.slice(1)
            }: ${value}`}</li>
          ))}
        </ul>
      </div>
      <p className="text-gray-600 mt-2">{background}</p>
    </div>
  );
};

export default CardComponent;
