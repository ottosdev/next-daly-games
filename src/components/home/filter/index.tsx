"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";

export function Filter() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (input.trim() === "" || input.length < 3) {
      return;
    }
    router.push(`/game/search/${encodeURIComponent(input)}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-slate-200 my-5 flex gap-2 items-center justify-between rounded-lg p-2"
    >
      <input
        type="text"
        placeholder="Procurando algum jogo?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-slate-200 outline-none w-11/12"
      />
      <button type="submit">
        <BsSearch size={24} color="#ea580c" />
      </button>
    </form>
  );
}
