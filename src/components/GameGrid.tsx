import type { Game } from '../data';
import { GameCard } from './GameCard';

interface Props {
  games: Game[];
  onOpen: (game: Game, trigger: HTMLElement) => void;
}

const EAGER_COUNT = 12;

export function GameGrid({ games, onOpen }: Props) {
  return (
    <ul className="grid">
      {games.map((game, i) => (
        <GameCard key={game.id} game={game} eager={i < EAGER_COUNT} onOpen={onOpen} />
      ))}
    </ul>
  );
}
