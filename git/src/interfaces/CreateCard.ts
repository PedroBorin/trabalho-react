export interface CreateCard {
  name: string;
  class: string;
  stats: {
    strength: number;
    intelligence: number;
    agility: number;
  };
  background: string;
}
