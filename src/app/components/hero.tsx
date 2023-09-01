import { Result } from "@/state";

type Props = {
  result: Result;
};

export default function Hero({ result }: Props) {
  return (
    <div className="my-10 flex flex-col gap-5 text-center">
      <div>
        <h1 className="text-xl font-extrabold uppercase">
          Desafio <span className="text-[2em]">1</span> da ELITI
        </h1>
      </div>
      <h1 className="text-sm font-bold">
        PARABÉNS PELO INTERESSE EM ESTUDAR COMPUTAÇÃO, INGLÊS, FINANÇAS E
        LIDERANÇA NA ELITI
      </h1>
      <p className="text-slate-600">
        O preço do nosso treinamento é de{" "}
        <span className="text-red-500 font-bold">{result.price},00</span> reias
        por mês e oferemos bolsas de acordo com a necessidade de cada estudante
        que podem chegar a{" "}
        <span className="text-green-500 font-bold">100%</span> de desconto!
      </p>
      <p className="text-sm">
        O desafio número 1 é responder honestamente ao breve questionário
        sócio-econômico abaixo para que possamos te conhecer melhor e assim
        iniciar o mais rapidamente possível os seus estudos na ELITI:
      </p>
    </div>
  );
}
