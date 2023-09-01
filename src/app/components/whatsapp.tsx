import { Result as ResultType, Questions } from "@/state";
import { useEffect, useState } from "react";

type Props = {
  result: ResultType;
  questions: Questions;
};

export default function Whatsapp({ result, questions }: Props) {
  const [link, setLink] = useState("");

  useEffect(() => {
    function getLink() {
      const [q1, q2, q3, q4, q5] = [
        questions[0].value ? 1 : 0,
        questions[1].value ? 1 : 0,
        questions[2].value ? 1 : 0,
        questions[3].value ? 1 : 0,
        questions[4].value ? 1 : 0,
      ];
      return `https://wa.me/5548999826011?text=*Estas%20s%C3%A3o%20minhas%20respostas%20ao%20Desafio%20N%C2%BA%201%20para%20entrar%20na%20ELITI%3A*%0Abolsas.eliti.com.br%3Fq1%3D${q1}%26q2%3D${q2}%26q3%3D${q3}%26q4%3D${q4}%26q5%3D${q5}%0A%0A*AGORA%20QUERO%20O%20DESAFIO%20N%C2%BA%202!*%20%F0%9F%98%83`;
    }
    setLink(getLink());
  }, [questions]);

  return (
    <div className="my-10 flex flex-col gap-7 pt-7 bg-green-600 rounded-2xl shadow-2xl text-white text-center">
      <h2 className="uppercase font-bold text-sm">
        A análise do seu perfil está completa
      </h2>

      <p className="text-sm px-10">
        Se você quer garantir sua vaga na ELITI nestas condições entre em
        contato clicando no botão do <span className="font-bold">WhatsApp</span>{" "}
        abaixo para enviar suas respostas e pedir pelo{" "}
        <span className="font-bold text-lg">Desafio nº 2</span>:
      </p>

      <div>
        <a
          // href="https://api.whatsapp.com/send?phone=5548999826011&text=Quero%20o%20Desafio%20%231%20para%20entrar%20na%20ELITI"
          href={link}
          className="bg-green-800 hover:bg-green-700 py-4 m-1 flex justify-center align-middle rounded-b-[13px] text-xs uppercase font-bold tracking-wider"
        >
          Enviar resposta por WhatsApp
        </a>
      </div>
    </div>
  );
}
