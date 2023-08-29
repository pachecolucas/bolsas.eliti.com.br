"use client";

import { useState } from "react";
import Hero from "./components/hero";
import Questions from "./components/questions";
import Result from "./components/result";
import Whatsapp from "./components/whatsapp";

import QUESTIONS from "@/state";

export default function Home() {
  const [questions, setQuestions] = useState(QUESTIONS);

  return (
    <div className="max-w-[800px] mx-auto px-5 text-slate-900">
      <Hero />
      <Questions questions={questions} setQuestions={setQuestions} />
      <Result questions={questions} />
      <Whatsapp />
    </div>
  );
}
