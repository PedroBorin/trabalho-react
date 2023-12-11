import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addCard } from "../services/cardService";
import { useNavigate } from "react-router-dom";

const dndClasses = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
];

const rollStat = () => {
  let rolls = [];
  for (let i = 0; i < 4; i++) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
  }
  rolls.sort().shift(); // Remove the lowest roll
  return rolls.reduce((a, b) => a + b, 0); // Sum the remaining rolls
};

const AddCard = () => {
  const navigation = useNavigate();

  const [stats, setStats] = useState({
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  });

  const rollStats = () => {
    setStats({
      strength: rollStat(),
      dexterity: rollStat(),
      constitution: rollStat(),
      intelligence: rollStat(),
      wisdom: rollStat(),
      charisma: rollStat(),
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      class: "",
      background: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      class: Yup.string().required("Required"),
      background: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      await addCard({ ...values, stats });
      alert("Carta adicionada com sucesso!")
      navigation("/")
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-xs">{formik.errors.name}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label
          htmlFor="class"
          className="block text-sm font-medium text-gray-700"
        >
          Class
        </label>
        <select
          id="class"
          name="class"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.class}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Selecione uma classe</option>
          {dndClasses.map((dndClass) => (
            <option key={dndClass} value={dndClass}>
              {dndClass}
            </option>
          ))}
        </select>
        {formik.touched.class && formik.errors.class ? (
          <div className="text-red-500 text-xs">{formik.errors.class}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <button
          type="button"
          onClick={rollStats}
          className="mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Rolar os atributos
        </button>
        <div>
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center py-1">
              <span className="capitalize">{key}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <textarea
          name="background"
          placeholder="História de fundo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.background}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
        {formik.touched.background && formik.errors.background ? (
          <div className="text-red-500 text-xs">{formik.errors.background}</div>
        ) : null}
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Card
      </button>
    </form>
  );
};

export default AddCard;