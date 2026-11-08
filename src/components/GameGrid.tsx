import type { Game } from '../data';
import { GameCard } from './GameCard';

interface Props {
  games: Game[];
  onOpen: (game: Game, trigger: HTMLElement) => void;
}

export function GameGrid({ games, onOpen }: Props) {
  return (
    <ul className="grid">
      {games.map((game, i) => (
        <GameCard key={game.id} game={game} index={i} eager={i < 8} onOpen={onOpen} />
      ))}
    </ul>
  );
}
