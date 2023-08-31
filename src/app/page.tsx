"use client";

import { useEffect, useState } from "react";
import Hero from "./components/hero";
import Questions from "./components/questions";
import Result from "./components/result";
import Whatsapp from "./components/whatsapp";

import QUESTIONS, { Result as ResultType, getResult, Answers } from "@/state";

type UrlProps = {
  searchParams: Answers;
};
export default function Home({ searchParams: answers }: UrlProps) {
  const [questions, setQuestions] = useState(QUESTIONS);
  const [result, setResult] = useState(getResult(questions, answers));

  useEffect(() => {
    console.log("Hora de calcular resultado");
    setResult(getResult(questions));
  }, [questions]);

  return (
    <div className="max-w-[800px] mx-auto px-5 text-slate-900">
      <Hero result={result} />
      <Questions questions={questions} setQuestions={setQuestions} />
      {result.completed && (
        <>
          <Result result={result} />
          <Whatsapp result={result} questions={questions} />
        </>
      )}
    </div>
  );
}
