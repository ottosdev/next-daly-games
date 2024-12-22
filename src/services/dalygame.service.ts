export async function getDalyGame() {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      {
        next: {
          revalidate: 320,
        },
      }
    );
    return response.json();
  } catch (error) {
    throw new Error("Não foi possível carregar o jogo do dia");
  }
}

export async function getAllDalysGames() {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=games`,
      {
        next: {
          revalidate: 320,
        },
      }
    );
    return response.json();
  } catch (error) {
    throw new Error("Não foi possível carregar todos os jogos");
  }
}

export async function getSearch(title: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`
    );
    return response.json();
  } catch (error) {
    return;
  }
}

export async function getGameById(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`
    );

    return response.json();
  } catch (error) {
    throw new Error("Não foi possível carregar o jogo");
  }
}
