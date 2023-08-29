export default function Hero() {
  return (
    <div className="my-10 flex flex-col gap-5 text-center">
      <h1 className="text-sm font-bold">
        PARABÉNS PELO INTERESSE EM ESTUDAR COMPUTAÇÃO, INGLÊS, FINANÇAS E
        LIDERANÇA NA ELITI
      </h1>
      <p className="text-slate-600">
        Nosso treinamento custa{" "}
        <span className="text-red-500 font-bold">1.010,00</span> reias por mês e
        oferemos bolsas de acordo com a necessidade de cada estudante que podem
        chegar a <span className="text-green-500 font-bold">100%</span> de
        desconto
      </p>
      <p className="text-xs text-slate-600">
        Responda ao questionário sócio-econômico abaixo para sabermos quanto
        apoio você precisa para começar a estudar:
      </p>
    </div>
  );
}
