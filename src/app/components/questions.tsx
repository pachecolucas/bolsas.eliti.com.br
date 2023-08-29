"use client";

import { Questions, Question } from "@/state";

type Props = {
  questions: Questions;
  setQuestions: (questions: Questions) => void;
};

export default function Questions({ questions, setQuestions }: Props) {
  const handleClick = (question: Question, value: boolean) => {
    const newQuestions = questions.map((q) => {
      if (q.key === question.key) q.value = value;
      return q;
    });
    setQuestions(newQuestions as Questions);
  };
  return (
    <div className="my-10 flex flex-col bg-white divide-y rounded-2xl shadow-2xl">
      {questions.map((question, i) => (
        <div key={i} className="py-8">
          <div className="px-8 flex gap-3">
            <img className="w-10 self-start" src={question.icon.src} alt="" />
            <div>
              <h1 className="text-sm font-bold">{question.title}</h1>
              <p className="text-xs text-slate-500">{question.description}</p>
              <div className="flex my-2 bg-slate-700 w-min text-white uppercase text-sm px-1 py-1 rounded-full">
                <div
                  onClick={() => handleClick(question as Question, false)}
                  className={`rounded-full px-2 py-1 cursor-pointer ${
                    question.value === false
                      ? "bg-red-500 font-bold"
                      : "hover:bg-slate-600"
                  }`}
                >
                  não
                </div>
                <div
                  onClick={() => handleClick(question as Question, true)}
                  className={`rounded-full px-2 py-1 cursor-pointer ${
                    question.value === true
                      ? "bg-green-500  font-bold"
                      : "hover:bg-slate-600"
                  }`}
                >
                  sim
                </div>
              </div>
              {question.value === true &&
                question.positive.map((p, i) => (
                  <p key={i} className="text-xs text-green-500">
                    {p}
                  </p>
                ))}
              {question.value === false &&
                question.negative.map((p, i) => (
                  <p key={i} className="text-xs text-red-500">
                    {p}
                  </p>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
