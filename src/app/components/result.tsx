"use client";

import { Result as ResultType } from "@/state";
import { useEffect, useState } from "react";

type Props = {
  result: ResultType;
};

export default function Result({ result }: Props) {
  const [status, setStatus] = useState({ eliti: "0%", student: "0%" });
  // const [status, setStatus] = useState({ linha1: "", linha2: "", linha3: "" });

  useEffect(() => {
    setStatus({
      eliti: `${Math.round(result.eliti.percent * 100)}%`,
      student: `${Math.round(result.student.percent * 100)}%`,
    });
  }, [result]);

  return (
    <div
      onClick={() => console.log(result)}
      className="my-10 flex flex-col gap-7 py-7 bg-[#0F172A] rounded-2xl shadow-2xl text-white text-center"
    >
      <h2 className="uppercase font-bold text-sm">
        Resultado do seu teste sócio-econômico
      </h2>

      {result.student.amount > result.eliti.amount && (
        <div className="bg-gradient-to-r from-green-900 to-green-600 p-5">
          <p className="text-sm">
            <span className="text-xl font-bold block uppercase">
              Parabéns!!!
            </span>
            Ao pagar a quantia de{" "}
            <span className="font-bold">{result.student.amount},00</span> reais
            por mês para a ELITI, além de pagar pelo seu curso, você vai estar
            contribuindo para que outros estudantes que não podem pagar também
            possam estudar em nossa escola.
          </p>
        </div>
      )}

      {result.student.amount == result.eliti.amount && (
        <div className="bg-gradient-to-r from-blue-700 to-blue-400 p-5">
          <p className="text-sm">
            <span className="text-xl font-bold block uppercase">
              Você vai receber uma bolsa de {Math.round(result.percent * 100)}%
            </span>
            No lugar de pagar o valor cheio de{" "}
            <span className="font-bold text-md line-through">
              {result.price}
            </span>{" "}
            reais você pagará apenas{" "}
            <span className="font-bold text-lg">{result.student.amount}</span>{" "}
            reais por mês para estudar na ELITI. Isso será suficiente para
            cobrir todos os seus custos individuais sem dar nem lucro nem
            prejuízo à ELITI.
          </p>
        </div>
      )}

      {result.student.amount < result.eliti.amount && (
        <div className="bg-gradient-to-r from-red-500 to-orange-400 p-5">
          <p className="text-sm">
            <span className="text-xl font-bold block uppercase">
              Estudante precisa de ajuda
            </span>
            Para estudar na ELITI você precisa de uma bolsa de{" "}
            <span className="font-bold text-lg">
              {Math.round(result.percent * 100)}%
            </span>{" "}
            de desconto. Dessa forma, no lugar de pagar o valor integral de{" "}
            <span className="font-bold text-md line-through">
              {result.price}
            </span>{" "}
            reais você pagará somente{" "}
            <span className="font-bold text-lg">{result.student.amount}</span>{" "}
            reais por mês.
          </p>
        </div>
      )}

      <div className="flex flex-col gap-3 my-3">
        <p className="text-xs uppercase tracking-widest">Ponto de equilíbrio</p>

        <div className="mx-5 rounded-full flex border border-white relative">
          <div className="absolute h-8 border border-white left-[50%] bottom-0"></div>
          <div
            className={`rounded-l-full bg-gradient-to-r from-green-900 to-green-500 text-xs py-1 min-w-fit text-left px-4 font-bold whitespace-nowrap`}
            style={{ width: status.student }}
          >
            R$ {result.student.amount},00
          </div>
          <div
            className={`rounded-r-full bg-gradient-to-r from-orange-400 to-red-500 text-xs py-1 min-w-fit text-right px-4 font-bold whitespace-nowrap`}
            style={{ width: status.eliti }}
          >
            R$ {result.eliti.amount},00
          </div>
        </div>

        <div className="text-xs font-bold uppercase tracking-widest flex">
          <p className="flex-1 text-left pl-5 text-green-400">
            Quanto você pagará
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

      {/* <div>
        <p className="text-xs uppercase tracking-widest">
          Seu saldo com a ELITI ao final do mês
        </p>
        <p className="text-2xl font-extrabold text-red-500">
          R$ {result.balance.toFixed(2)}
        </p>
      </div> */}
    </div>
  );
}
