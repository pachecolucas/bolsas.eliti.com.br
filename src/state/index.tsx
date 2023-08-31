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
    value: boolean;
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
    value: boolean;
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
    value: boolean;
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
    value: boolean;
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
    value: boolean;
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
      "Neste caso a Eliti vai pagar pelo seu transporte. Para isso, vamos gastar aproximadamente 240 reais a mais todo mês com você.",
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
      "Neste caso a Eliti não irá cobrar este custo de aproximadamente 240 reias por mês de você.",
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
      "Neste caso a Eliti não irá cobrar este custo de aproximadamente 145 reias por mês de você.",
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
      "Neste caso a Eliti não irá cobrar este custo de aproximadamente 240 reias por mês de você.",
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
      "VOCÊ PODE APOIAR OUTRO ESTUDANTE A FREQUENTAR A ELITI COM UM VALOR EXTRA DE 685 REAIS POR MÊS?",
    description:
      "Este valor de 685 reais por mês nos permite receber outros estudante que não pode pagar",
    positive: [
      "Isso é incrível! Com este valor extra de 385 por mês você nos dá condições de receber outros estudantes que não podem pagar e precisam de ajuda para poder estudar na Eliti.",
    ],
    negative: [
      "Ok. Entedemos que é importante primeiro colocar os pés no chão. Se o seu momento de hoje não permite ajudar um outro colega então venha aprender na ELITI para que um dia seja capaz de fazê-lo.",
    ],
    investiment: {
      eliti: 0,
      student: 625,
    },
    value: true,
  },
];

const INITIAL_RESULT = {
  price: 1250,
  completed: false,
  percent: 0,
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

export type Answers = {
  q1?: "0" | "1";
  q2?: "0" | "1";
  q3?: "0" | "1";
  q4?: "0" | "1";
  q5?: "0" | "1";
};

export function getResult(questions: Questions, answers?: Answers): Result {
  const result: Result = { ...INITIAL_RESULT };

  console.log(answers);

  // transport
  let item = questions.find((q) => q.key === "transport");
  item && answers?.q1 === "0" ? (item.value = false) : null;
  result.questions.transport = {
    eliti: !item?.value ? (item?.investiment.eliti as number) : 0, // eliti só gasta se o estudante não pagar
    student: item?.value ? (item?.investiment.student as number) : 0,
  };

  // food
  item = questions.find((q) => q.key === "food");
  item && answers?.q2 === "0" ? (item.value = false) : null;
  result.questions.food = {
    eliti: item?.investiment.eliti as number, // eliti gasta mesmo com estudante pagando
    student: item?.value ? (item?.investiment.student as number) : 0,
  };

  // admin
  item = questions.find((q) => q.key === "admin");
  item && answers?.q3 === "0" ? (item.value = false) : null;
  result.questions.admin = {
    eliti: item?.investiment.eliti as number, // eliti gasta mesmo com estudante pagando
    student: item?.value ? (item?.investiment.student as number) : 0,
  };

  // teacher
  item = questions.find((q) => q.key === "teacher");
  item && answers?.q4 === "0" ? (item.value = false) : null;
  result.questions.teacher = {
    eliti: item?.investiment.eliti as number, // eliti gasta mesmo com estudante pagando
    student: item?.value ? (item?.investiment.student as number) : 0,
  };

  // donate
  item = questions.find((q) => q.key === "donate");
  item && answers?.q5 === "0" ? (item.value = false) : null;
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

  result.percent = 1 - result.student.amount / result.price;
  // (result.eliti.amount + result.student.amount);

  // balance
  result.balance = result.student.amount - result.eliti.amount;

  return result;
}

export default QUESTIONS;
