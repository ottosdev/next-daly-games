import { Container } from "@/components/container";
import { getGameById } from "@/services/dalygame.service";
import { IDalyGameProps } from "@/utils/types/game";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Label } from "./components/label";

interface IGameDetailProps {
  params: Promise<{ id: string }>;
}

export default async function GameDetail({ params }: IGameDetailProps) {
  const { id } = await params;

  const game: IDalyGameProps = await getGameById(id);

  if (!game) {
    redirect("/");
  }

  return (
    <main className="w-full">
      <div className="bg-black h-80 sm:h-96 relative">
        <Image
          className="object-cover w-full h-80 sm:h-96 opacity-90"
          src={game.image_url}
          alt={game.title}
          priority
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw "
        />
      </div>
      <Container>
        <h1 className="font-bold text-xl my-4">{game.title}</h1>
        <p>{game.description}</p>

        <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>
        <div className="flex gap-4 flex-wrap">
          {game.categories.map((c) => (
            <Label name={c} key={c} />
          ))}
        </div>

        <p className="mt-7 mb-2 ">Data lançamento: {game.release}</p>
      </Container>
    </main>
  );
}
