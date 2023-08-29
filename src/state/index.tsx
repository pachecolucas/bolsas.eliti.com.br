"use client";

import iconBus from "@/icons/bus.svg";
import iconDinner from "@/icons/dinner.svg";
import iconHeart from "@/icons/heart.svg";
import iconPen from "@/icons/pen.svg";
import iconTeacher from "@/icons/teacher.svg";

export type Question = {
  key: string;
  icon: any;
  title: string;
  description: string;
  positive: string[];
  negative: string[];
  value: null | true | false;
};

export type Questions = [
  {
    key: "transport";
    icon: any;
    title: string;
    description: string;
    positive: string[];
    negative: string[];
    value: null | true | false;
  },
  {
    key: "food";
    icon: any;
    title: string;
    description: string;
    positive: string[];
    negative: string[];
    value: null | -1 | 1;
  },
  {
    key: "admin";
    icon: any;
    title: string;
    description: string;
    positive: string[];
    negative: string[];
    value: null | -1 | 1;
  },
  {
    key: "teacher";
    icon: any;
    title: string;
    description: string;
    positive: string[];
    negative: string[];
    value: null | -1 | 1;
  },
  {
    key: "donate";
    icon: any;
    title: string;
    description: string;
    positive: string[];
    negative: string[];
    value: null | -1 | 1;
  }
];

const QUESTIONS: Questions = [
  {
    key: "transport",
    icon: iconBus,
    title: "VOCÊ PODE PAGAR PELO SEU TRANSPORTE PARA VIR ATÉ A ELITI?",
    description:
      "Responda não se você não tem dinheiro para pagar pelo ser próprio transporte para ir à Eliti",
    positive: [
      "Que bom que pode pagar pelo seu transporte!",
      "Assim vamos economizar aproximandamente 240 reais todo mês com você.",
    ],
    negative: [
      "Neste caso a Eliti irá verificar a possibilidade de acarcar com o seu transporte.",
      "Para isso, vamos gastar aproximadamente 240 reais a mais todo mês.",
    ],
    value: null,
  },
  {
    key: "food",
    icon: iconDinner,
    title:
      "VOCÊ PODE PAGAR PELA SUA ALIMENTAÇÃO NA ELITI? ELA NOS CUSTA 240 REAIS POR MÊS.",
    description:
      "A alimentação na Eliti é de altíssima qualidade nutricional sendo oferecida para todos sem exceção",
    positive: [
      "Que bom que pode pagar pela sua alimentação!",
      "Assim vamos economizar aproximandamente 240 reais todo mês com você.",
    ],
    negative: [
      "Neste caso a Eliti irá verificar a possibilidade pagar pela sua alimentação.",
      "Para isso, vamos gastar aproximadamente 240 reais a mais todo mês.",
    ],
    value: null,
  },
  {
    key: "admin",
    icon: iconPen,
    title:
      "PODE PAGAR 145 REAIS POR MÊS PARA AJUDAR COM AS DESPESAS ADMINISTRATIVAS DA ELITI?",
    description:
      "Este são gastos para a manutenção da escola incluindo: despesas com líderes bolsistas, marketing e escritório",
    positive: [
      "Que bom que pode apoiar com os nossos gastas administrativos!",
      "Assim vamos economizar aproximandamente 145 reais todo mês com você.",
    ],
    negative: [
      "Neste caso a Eliti irá verificar a possibilidade de não repassar este custo a você.",
      "Para isso, vamos gastar aproximadamente 145 reais a mais todo mês.",
    ],
    value: null,
  },
  {
    key: "teacher",
    icon: iconTeacher,
    title:
      "VOCÊ PODE PAGAR 240 REAIS POR MÊS PARA GASTOS COM NOSSOS EDUCADORES?",
    description:
      "O custo dos professores da ELITI está avaliado em 240 reais por estudante por mês",
    positive: [
      "Que bom que pode contribuir com os nossos educadores!",
      "Assim vamos economizar aproximandamente 240 reais todo mês com você.",
    ],
    negative: [
      "Neste caso a Eliti irá verificar a possibilidade de não repassar este custo a você.",
      "Para isso, vamos gastar aproximadamente 240 reais a mais todo mês.",
    ],
    value: null,
  },
  {
    key: "donate",
    icon: iconHeart,
    title:
      "VOCÊ PODE CONTRIBUIR COM 385 REAIS A MAIS POR MÊS PARA AJUDAR A ELITI?",
    description:
      "Este valor de 385 reais por mês nos permite receber outros estudantes que não podem pagar",
    positive: [
      "Isso é incrível! Com este valor extra de 385 por mês você nos dá condições de recebermos outros estudantes que não podem pagar pelo nosso e precisam de ajuda para poder estudar na Eliti.",
    ],
    negative: [
      "Ok. Entedemos que é importante saber cuidar primeiro de si mesmo e colocar primeiro os pés no chão. Seu momento de devolver ao mundo também vai chegar se conseguir estudar e aprender de verdade agora.",
    ],
    value: null,
  },
];

export default QUESTIONS;
