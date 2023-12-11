interface Card {
  id: number; // Unique identifier for the card
  name: string; // Name of the RPG character
  class: string; // Class, e.g., Warrior, Mage, etc.
  stats: {
    strength: number;
    intelligence: number;
    agility: number;
    // ... other relevant stats
  };
  background: string; // Background story or details
}

export default Card