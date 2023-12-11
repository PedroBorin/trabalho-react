import React, { useState, useEffect } from "react";
import CardComponent from "./Card.tsx";
import { getCards } from "../services/cardService";
import { Card } from "../interfaces/Card.ts";
import SearchBar from "./SearchBar.tsx";
import FilterOptions from "./FilterOptions.tsx";

interface CardListProps {
  children: React.ReactNode;
}

const CardList = ({ children }: CardListProps) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchCards = async () => {
      let fetchedCards = await getCards();

      if (filter !== "all") {
        fetchedCards = fetchedCards.filter(
          (card) => card.class.toLowerCase() === filter
        );
      }

      if (searchTerm) {
        fetchedCards = fetchedCards.filter((card) =>
          card.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setCards(fetchedCards);
    };

    fetchCards();
  }, [filter, searchTerm]);

  const handleFilterChange = (selectedFilter: string) => {
    setFilter(selectedFilter.toLowerCase());
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        D&D Character Cards
      </h1>
      <SearchBar onSearch={handleSearch} />
      <FilterOptions onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cards.length > 0 ? (
          cards.map((card) => <CardComponent key={card.id} {...card} />)
        ) : (
          <p className="text-center col-span-full text-gray-700 text-lg">
            {cards.length === 0 ? "No cards available." : "Loading cards..."}
          </p>
        )}
      </div>
      {children}
    </div>
  );
};

export default CardList;
