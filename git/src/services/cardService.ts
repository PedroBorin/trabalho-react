import { Card } from "../interfaces/Card";
import { CreateCard } from "../interfaces/CreateCard";

// services/cardService.js
const CARD_STORAGE_KEY = "rpg_cards";

const fetchCards = (): Card[] => {
  const cardsString = localStorage.getItem(CARD_STORAGE_KEY);
  return cardsString ? JSON.parse(cardsString) : [];
};

export const getCards = async (): Promise<Card[]> => {
  return new Promise((resolve) => {
    resolve(fetchCards());
  });
};

export const getCardById = async (id: number): Promise<Card | undefined> => {
  return new Promise((resolve) => {
    const cards = fetchCards();
    const card = cards.find((c) => c.id === id);
    resolve(card);
  });
};

export const addCard = async (cardData: CreateCard) => {
  return new Promise((resolve) => {
    const cards = fetchCards();
    const newCard = { ...cardData, id: cards.length + 1 };
    cards.push(newCard);
    localStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(cards));
    resolve(newCard);
  });
};
