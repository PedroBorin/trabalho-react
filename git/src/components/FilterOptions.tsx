import React from 'react';

const FilterOptions = ({ onFilterChange }) => {
  return (
    <div className="my-4 flex justify-center">
      <div className="relative">
        <select
          onChange={(e) => onFilterChange(e.target.value)}
          className="block appearance-none w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="all">All Classes</option>
          <option value="barbarian">Barbarian</option>
          <option value="bard">Bard</option>
          <option value="cleric">Cleric</option>
          <option value="druid">Druid</option>
          <option value="fighter">Fighter</option>
          <option value="monk">Monk</option>
          <option value="paladin">Paladin</option>
          <option value="ranger">Ranger</option>
          <option value="rogue">Rogue</option>
          <option value="sorcerer">Sorcerer</option>
          <option value="warlock">Warlock</option>
          <option value="wizard">Wizard</option>
          {/* You can add more classes or specific subclasses if needed */}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.59 7l5 5 5-5H5.59z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
