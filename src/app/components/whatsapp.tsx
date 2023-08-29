import { Result as ResultType } from "@/state";

type Props = {
  result: ResultType;
};

export default function Whatsapp({ result }: Props) {
  return (
    <div className="my-10 flex flex-col gap-7 pt-7 bg-green-600 rounded-2xl shadow-2xl text-white text-center">
      <h2 className="uppercase font-bold text-sm">
        A análise do seu perfil está completa
      </h2>

      <p className="text-sm px-10">
        Se você quer garantir sua vaga na ELITI nestas condições entre em
        contato com nosso Whatsapp abaixo e peça pelo{" "}
        <span className="font-bold text-lg">Desafio nº 01</span>:
      </p>

      <div>
        <a
          href="https://api.whatsapp.com/send?phone=5548999826011&text=Quero%20o%20Desafio%20%231%20para%20entrar%20na%20ELITI"
          className="bg-green-800 hover:bg-green-700 py-4 m-1 flex justify-center align-middle rounded-b-[13px] text-xs uppercase font-bold tracking-wider"
        >
          Continuar por Whatsapp
        </a>
      </div>
    </div>
  );
}
