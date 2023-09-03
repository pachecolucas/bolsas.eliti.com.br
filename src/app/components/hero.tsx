import { Result } from "@/state";

type Props = {
  result: Result;
};

export default function Hero({ result }: Props) {
  return (
    <div className="my-10 flex flex-col gap-5 text-center text-white">
      <div>
        <h1 className="text-xl font-extrabold uppercase">
          Desafio <span className="text-[2em]">1</span> da ELITI
        </h1>
      </div>
      <h1 className="text-sm font-bold">
        PARABÉNS PELO INTERESSE EM ESTUDAR COMPUTAÇÃO, INGLÊS, FINANÇAS E
        LIDERANÇA NA ELITI
      </h1>
      <p className="text-slate-600 bg-white p-5 rounded-2xl shadow-2xl font-bold">
        O preço do nosso treinamento é de{" "}
        <span className="text-red-500 font-bold text-lg">
          {result.price},00
        </span>{" "}
        reias por mês e oferemos bolsas de acordo com a necessidade de cada
        estudante que podem chegar a até{" "}
        <span className="text-green-600 font-bold text-lg">100%</span> de
        desconto!
      </p>
      <p className="text-sm">
        Para sabermos com ajudá-lo responda honestamente ao breve questionário
        sócio-econômico abaixo:
      </p>
    </div>
  );
}
