import { useQuery } from "@tanstack/react-query";
import patternDividerDesktop from "../assets/pattern-divider-desktop.svg";
import iconDice from "../assets/icon-dice.svg";
import patternDividerMobile from "../assets/pattern-divider-mobile.svg";

type AdviceData = { slip: { id: number; advice: string } };

export function Card() {
  const { data: adviceData, isRefetching, refetch } = useQuery({
    queryKey: ['adviceData'],

    queryFn: async () => {
      const response = await fetch("https://api.adviceslip.com/advice");
      return (await response.json()) as AdviceData;
    },
    refetchOnWindowFocus: false // Desativa a realização da requisição quando a tela é focada.
  });

  return (
    <main className="card">
      {/* Se adviceData for igual a undefined ,
   não é executada a proxima condição, 
   portanto o valor exibido será igual a 'false', neste caso mostrara o spinner.
  https://react.dev/learn/conditional-rendering */}
      {adviceData === undefined ? (
        <div className="loading-spinner-card" />
      ) : (
        <>
          <h1 className="advice-id">ADVICE #{adviceData.slip.id}</h1>
          <p className="advice-text">{adviceData.slip.advice}</p>
        </>
      )}
      <img
        className="pattern-divider-mobile"
        src={patternDividerMobile}
        alt=""
      />
      <img
        className="pattern-divider-desktop"
        src={patternDividerDesktop}
        alt=""
      />
      <button
        className="random-button"
        disabled={isRefetching}
        onClick={() => refetch()}  //refetch realiza novamente a requisição
      >
        {isRefetching ? (
          <div className="loading-spinner-button" />
        ) : (
          <img src={iconDice} alt="generate advice" />
        )}
      </button>
    </main>
  );
}
