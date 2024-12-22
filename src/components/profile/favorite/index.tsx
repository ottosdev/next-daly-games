"use client";

import { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";

export function Favorite() {
  const [game, setGame] = useState("");
  const [showGame, setShowGame] = useState(false);
  const [games, setGames] = useState<string>("");

  function hadleShow() {
    setShowGame(!showGame);
    if (game !== "") {
      setGames(game);
    }
    setGame("");
  }

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      hadleShow();
    }
  };

  return (
    <div className="w-full bg-gray-900 p-4 h-44 text-white rounded-lg flex justify-between flex-col">
      {showGame ? (
        <div className="flex items-center justify-center gap-3">
          <input
            className="w-full rounded-md h-8 text-black px-2"
            type="text"
            placeholder="Digite o nome do jogo"
            value={game}
            onKeyDown={handleKeyDown}
            onChange={(e) => setGame(e.target.value)}
          />

          <button onClick={hadleShow}>
            <FiX size={24} />
          </button>
        </div>
      ) : (
        <button
          className="self-start hover:scale-110 duration-300 transition-all"
          onClick={hadleShow}
        >
          <FiEdit size={24} />
        </button>
      )}

      {games && (
        <div>
          <span>Jogo Favorito</span>
          <p className="font-bold text-white">{games}</p>
        </div>
      )}

      {!games && <p className="font-bold  text-white">Adicionar Jogo</p>}
    </div>
  );
}
