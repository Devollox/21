import { useMemo } from 'react';
import useTypeTag from "@/hook/useGameTags";

type Game = {
  name: string;
  tags: { en_name: string }[];
};

const useFilterGamesByTag = (games: Game[], tag: string): Game[] => {
  return useMemo(() => {
    return games.filter(game =>
      game.tags.some(t => t.en_name === useTypeTag(tag))
    );
  }, [games, tag]);
};

export default useFilterGamesByTag;
