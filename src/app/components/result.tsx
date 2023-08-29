"use client";

import { Questions, Question } from "@/state";
import { useEffect } from "react";

type Props = {
  questions: Questions;
};

export default function Result({ questions }: Props) {
  useEffect(() => {
    console.log("Hora de calcular resultado");
  }, [questions]);
  return (
    <div className="my-10 flex flex-col gap-7 py-7 bg-[#0F172A] rounded-2xl shadow-2xl text-white text-center">
      <h2 className="uppercase font-bold text-sm">
        Resultado do seu teste sócio-econômico
      </h2>

      <div className="bg-gradient-to-r from-red-500 to-orange-400 py-5">
        <p className="text-sm">Você precisa de uma bolsa de estudo</p>
        <p className="text-xl">
          com <span className="font-black">27%</span> de desconto
        </p>
        <p className="text-sm">para estudar na ELITI</p>
      </div>

      <div className="flex flex-col gap-3 my-3">
        <p className="text-xs uppercase tracking-widest">Ponto de equilíbrio</p>

        <div className="mx-5 rounded-full flex border border-white relative">
          <div className="absolute h-8 border border-white left-[50%] bottom-0"></div>
          <div className="rounded-l-full bg-gradient-to-r from-green-900 to-green-500 text-xs py-1 w-[30%] min-w-fit text-left px-4 font-bold whitespace-nowrap">
            R$ 635,00
          </div>
          <div className="rounded-r-full bg-gradient-to-r from-orange-400 to-red-500 text-xs py-1 w-[70%] min-w-fit text-right px-4 font-bold whitespace-nowrap">
            R$ 865,00
          </div>
        </div>

        <div className="text-[10px] uppercase tracking-widest flex">
          <p className="flex-1 text-left pl-5 text-green-400">
            Quando você pagará
            <br />
            para a Eliti por mês
          </p>
          <p className="flex-1 text-right pr-5 text-red-400">
            Quanto a Eliti gastará
            <br />
            com você por mês
          </p>
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-widest">
          Seu saldo com a ELITI ao final do mês
        </p>
        <p className="text-2xl font-extrabold text-red-500">R$ -230,00</p>
      </div>
    </div>
  );
}
