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
      return `https%3A%2F%2Fwa.me%2F5548999826011%3Ftext%3DOl%C3%A1!%0A%0A%F0%9F%93%9D%20*Estas%20s%C3%A3o%20minhas%20respostas%20ao%20question%C3%A1rio%20s%C3%B3cio-econ%C3%B4mico%3A*%0Abolsas.eliti.com.br%3Fq1%3D${q1}%26q2%3D${q2}%26q3%3D${q3}%26q4%3D${q4}%26q5%3D${q5}%0A%0A*AGORA%20QUERO%20RECEBER%20OS%20DESAFIOS%20PARA%20ENTRAR%20NA%20ELITI*%20%F0%9F%98%83%20`;
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
        contato com nosso Whatsapp abaixo e peça pelo{" "}
        <span className="font-bold text-lg">Desafio nº 01</span>:
      </p>

      <div>
        <a
          // href="https://api.whatsapp.com/send?phone=5548999826011&text=Quero%20o%20Desafio%20%231%20para%20entrar%20na%20ELITI"
          href={link}
          className="bg-green-800 hover:bg-green-700 py-4 m-1 flex justify-center align-middle rounded-b-[13px] text-xs uppercase font-bold tracking-wider"
        >
          Continuar por Whatsapp
        </a>
      </div>
    </div>
  );
}
