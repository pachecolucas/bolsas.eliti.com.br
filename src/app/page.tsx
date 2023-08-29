import Hero from "./components/hero";
import Questions from "./components/questions";
import Result from "./components/result";
import Whatsapp from "./components/whatsapp";

export default function Home() {
  return (
    <div className="max-w-[800px] mx-auto px-5 text-slate-900">
      <Hero />
      <Questions />
      <Result />
      <Whatsapp />
    </div>
  );
}
