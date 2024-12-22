import { Container } from "@/components/container";
import { GameCard } from "@/components/home/card";
import { Filter } from "@/components/home/filter";
import { getAllDalysGames, getDalyGame } from "@/services/dalygame.service";
import { IDalyGameProps } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";

export default async function Home() {
  const daylGame: IDalyGameProps = await getDalyGame();
  const games: IDalyGameProps[] = await getAllDalysGames();

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exlusivo para você
        </h1>
        <Link href={`/game/${daylGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative rounded-lg ">
              <div className="absolute z-20 flex bottom-0 p-3 gap-2 items-center justify-center">
                <p className="font-bold text-xl text-white">{daylGame.title}</p>
                <BsArrowRightSquare size={24} color="#fff" />
              </div>
              <Image
                src={daylGame.image_url}
                alt={daylGame.title}
                priority
                quality={100}
                fill
                className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw "
              />
            </div>
          </section>
        </Link>

        <Filter />

        <h2 className="text-lg font-bold mt-8 mb-5">Jogos para conhecer</h2>
        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games.map((item) => (
            <GameCard game={item} key={item.id} />
          ))}
        </section>
      </Container>
    </main>
  );
}
