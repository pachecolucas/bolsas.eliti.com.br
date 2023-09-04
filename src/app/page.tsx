"use client";

import { useEffect, useState } from "react";
import Hero from "./components/hero";
import Questions from "./components/questions";
import Result from "./components/result";
import Whatsapp from "./components/whatsapp";

import QUESTIONS, { Result as ResultType, getResult, Answers } from "@/state";

type SearchParams = {
  a?: string;
};

type UrlProps = {
  searchParams: SearchParams;
};

export default function Home({ searchParams }: UrlProps) {
  const answers = _convertSearchParamsToAnwsers(searchParams);
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

function _convertSearchParamsToAnwsers(
  searchParams: SearchParams
): Answers | undefined {
  const values = searchParams.a?.split("").map((v) => v === "1");
  if (!values) return;
  const [a1, a2, a3, a4, a5] = values;
  return {
    a1: !!a1,
    a2: !!a2,
    a3: !!a3,
    a4: !!a4,
    a5: !!a5,
  };
}
