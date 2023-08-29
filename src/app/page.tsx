"use client";

import { useEffect, useState } from "react";
import Hero from "./components/hero";
import Questions from "./components/questions";
import Result from "./components/result";
import Whatsapp from "./components/whatsapp";

import QUESTIONS, { Result as ResultType, getResult } from "@/state";

export default function Home() {
  const [questions, setQuestions] = useState(QUESTIONS);
  const [result, setResult] = useState(getResult(questions));

  useEffect(() => {
    console.log("Hora de calcular resultado");
    setResult(getResult(questions));
  }, [questions]);

  return (
    <div className="max-w-[800px] mx-auto px-5 text-slate-900">
      <Hero />
      <Questions questions={questions} setQuestions={setQuestions} />
      <Result result={result} />
      <Whatsapp />
    </div>
  );
}
