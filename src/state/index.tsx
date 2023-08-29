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
  investiment: {
    eliti: number;
    student: number;
  };
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
    investiment: {
      eliti: number;
      student: number;
    };
    value: null | true | false;
  },
  {
    key: "food";
    icon: any;
    title: string;
    description: string;
    positive: string[];
    negative: string[];
    investiment: {
      eliti: number;
      student: number;
    };
    value: null | true | false;
  },
  {
    key: "admin";
    icon: any;
    title: string;
    description: string;
    positive: string[];
    negative: string[];
    investiment: {
      eliti: number;
      student: number;
    };
    value: null | true | false;
  },
  {
    key: "teacher";
    icon: any;
    title: string;
    description: string;
    positive: string[];
    negative: string[];
    investiment: {
      eliti: number;
      student: number;
    };
    value: null | true | false;
  },
  {
    key: "donate";
    icon: any;
    title: string;
    description: string;
    positive: string[];
    negative: string[];
    investiment: {
      eliti: number;
      student: number;
    };
    value: null | true | false;
  }
];

const QUESTIONS: Questions = [
  {
    key: "transport",
    icon: iconBus,
    title: "VOCÊ PODE PAGAR PELO SEU TRANSPORTE PARA VIR ATÉ A ELITI?",
    description:
      "Responda não se você não tem dinheiro para pagar pelo seu próprio transporte para ir à Eliti",
    positive: [
      "Que bom que pode pagar pelo seu transporte! Assim vamos economizar aproximadamente 240 reais todo mês com você.",
    ],
    negative: [
      "Neste caso a Eliti irá verificar a possibilidade de arcar com o seu transporte. Para isso, vamos gastar aproximadamente 240 reais a mais todo mês.",
    ],
    investiment: {
      eliti: 240,
      student: 0,
    },
    value: true,
  },
  {
    key: "food",
    icon: iconDinner,
    title:
      "VOCÊ PODE PAGAR PELA SUA ALIMENTAÇÃO NA ELITI? ELA NOS CUSTA 240 REAIS POR MÊS.",
    description:
      "A alimentação na Eliti é de altíssima qualidade nutricional sendo oferecida para todos sem exceção",
    positive: [
      "Que bom que pode pagar pela sua alimentação! Assim vamos economizar aproximadamente 240 reais todo mês com você.",
    ],
    negative: [
      "Neste caso a Eliti irá verificar a possibilidade pagar pela sua alimentação. Para isso, vamos gastar aproximadamente 240 reais a mais todo mês.",
    ],
    investiment: {
      eliti: 240,
      student: 240,
    },
    value: true,
  },
  {
    key: "admin",
    icon: iconPen,
    title:
      "VOCÊ PODE PAGAR 145 REAIS POR MÊS PARA AJUDAR COM AS DESPESAS ADMINISTRATIVAS DA ELITI?",
    description:
      "Este são gastos para a manutenção da escola incluindo: despesas com líderes bolsistas, marketing e escritório",
    positive: [
      "Que bom que pode apoiar com os nossos gastos administrativos! Assim vamos economizar aproximadamente 145 reais todo mês com você.",
    ],
    negative: [
      "Neste caso a Eliti irá verificar a possibilidade de não repassar este custo a você. Para isso, vamos gastar aproximadamente 145 reais a mais todo mês.",
    ],
    investiment: {
      eliti: 145,
      student: 145,
    },
    value: true,
  },
  {
    key: "teacher",
    icon: iconTeacher,
    title:
      "VOCÊ PODE PAGAR 240 REAIS POR MÊS PARA GASTOS COM NOSSOS EDUCADORES?",
    description:
      "O custo dos professores da ELITI está avaliado em 240 reais por estudante por mês",
    positive: [
      "Que bom que pode contribuir com os nossos educadores! Assim vamos economizar aproximadamente 240 reais todo mês com você.",
    ],
    negative: [
      "Neste caso a Eliti irá verificar a possibilidade de não repassar este custo a você. Para isso, vamos gastar aproximadamente 240 reais a mais todo mês.",
    ],
    investiment: {
      eliti: 240,
      student: 240,
    },
    value: true,
  },
  {
    key: "donate",
    icon: iconHeart,
    title:
      "VOCÊ PODE CONTRIBUIR COM 385 REAIS A MAIS POR MÊS PARA AJUDAR A ELITI?",
    description:
      "Este valor de 385 reais por mês nos permite receber outros estudantes que não podem pagar",
    positive: [
      "Isso é incrível! Com este valor extra de 385 por mês você nos dá condições de receber outros estudantes que não podem pagar e precisam de ajuda para poder estudar na Eliti.",
    ],
    negative: [
      "Ok. Entedemos que é importante cuidar de si mesmo colocando primeiro os pés no chão. Se o seu momento de hoje não permite ajudar outras pessoas então venha aprender na ELITI para que um dia seja capaz de fazê-lo.",
    ],
    investiment: {
      eliti: 0,
      student: 385,
    },
    value: true,
  },
];

const INITIAL_RESULT = {
  completed: false,
  percent: 0, // valor da bolsa
  balance: 0,
  eliti: {
    amount: 0,
    percent: 0,
  },
  student: {
    amount: 0,
    percent: 0,
  },
  questions: {
    transport: {
      eliti: 0,
      student: 0,
    },
    food: {
      eliti: 0,
      student: 0,
    },
    admin: {
      eliti: 0,
      student: 0,
    },
    teacher: {
      eliti: 0,
      student: 0,
    },
    donate: {
      eliti: 0,
      student: 0,
    },
  },
};

export type Result = typeof INITIAL_RESULT;

function _getKeyValue(
  key: string,
  questions: Questions
): { eliti: number; student: number } {
  const item = questions.find((q) => q.key === key);
  if (item?.value) {
    return { eliti: 0, student: item?.investiment.student as number };
  } else {
    return { eliti: item?.investiment.eliti as number, student: 0 };
  }
}

export function getResult(questions: Questions): Result {
  const result: Result = { ...INITIAL_RESULT };

  // transport
  let item = questions.find((q) => q.key === "transport");
  if (item?.value === null) return result;
  result.questions.transport = {
    eliti: !item?.value ? (item?.investiment.eliti as number) : 0, // eliti só gasta se o estudante não pagar
    student: item?.value ? (item?.investiment.student as number) : 0,
  };

  // food
  item = questions.find((q) => q.key === "food");
  if (item?.value === null) return result;
  result.questions.food = {
    eliti: item?.investiment.eliti as number, // eliti gasta mesmo com estudante pagando
    student: item?.value ? (item?.investiment.student as number) : 0,
  };

  // admin
  item = questions.find((q) => q.key === "admin");
  if (item?.value === null) return result;
  result.questions.admin = {
    eliti: item?.investiment.eliti as number, // eliti gasta mesmo com estudante pagando
    student: item?.value ? (item?.investiment.student as number) : 0,
  };

  // teacher
  item = questions.find((q) => q.key === "teacher");
  if (item?.value === null) return result;
  result.questions.teacher = {
    eliti: item?.investiment.eliti as number, // eliti gasta mesmo com estudante pagando
    student: item?.value ? (item?.investiment.student as number) : 0,
  };

  // donate
  item = questions.find((q) => q.key === "donate");
  if (item?.value === null) return result;
  result.questions.donate = {
    eliti: item?.investiment.eliti as number, // eliti deixa de ganhar, mas nunca gasta
    student: item?.value ? (item?.investiment.student as number) : 0,
  };

  // completed
  result.completed = true;

  // amount
  result.eliti.amount =
    result.questions.transport.eliti +
    result.questions.food.eliti +
    result.questions.admin.eliti +
    result.questions.teacher.eliti +
    result.questions.donate.eliti;

  result.student.amount =
    result.questions.transport.student +
    result.questions.food.student +
    result.questions.admin.student +
    result.questions.teacher.student +
    result.questions.donate.student;

  // percentage
  result.eliti.percent =
    result.eliti.amount / (result.eliti.amount + result.student.amount);

  result.student.percent =
    result.student.amount / (result.eliti.amount + result.student.amount);

  result.percent =
    (result.eliti.amount - result.student.amount) /
    (result.eliti.amount + result.student.amount);

  // balance
  result.balance = result.student.amount - result.eliti.amount;

  return result;
}

export default QUESTIONS;
