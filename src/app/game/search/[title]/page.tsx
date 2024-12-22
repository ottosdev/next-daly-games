import Loading from "@/app/loading";
import { Container } from "@/components/container";
import { GameCard } from "@/components/home/card";
import { Filter } from "@/components/home/filter";
import { getSearch } from "@/services/dalygame.service";
import { IDalyGameProps } from "@/utils/types/game";
import { Suspense } from "react";

interface IParams {
  params: Promise<{ title: string }>;
}

export default async function Search({ params }: IParams) {
  const { title } = await params;

  const games: IDalyGameProps[] = await getSearch(title);

  if (games === null || games.length === 0) {
    return (
      <p className="flex justify-center items-center mt-10 font-bold text-xl">
        Esse jogo não foi encontrado! ....
      </p>
    );
  }

  return (
    <div className="w-full">
      <Container>
        <Filter />
        <h1 className="font-bold text-xl mt-8 mb-5">
          Veja o que encontramos na nossa base
        </h1>

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games.map((item) => (
            <GameCard key={item.id} game={item} />
          ))}
        </section>
      </Container>
    </div>
  );
}
