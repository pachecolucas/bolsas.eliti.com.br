export default function Whatsapp() {
  return (
    <div className="my-10 flex flex-col gap-7 pt-7 bg-green-600 rounded-2xl shadow-2xl text-white text-center">
      <h2 className="uppercase font-bold text-sm">
        A análise do seu perfil está completa
      </h2>

      <p className="text-sm px-10">
        Se você quer a sua bolsa de 27% de desconto para estudar na ELITI, peça
        pelo desafio número 1 no whatsapp abaixo:
      </p>

      <div>
        <a
          href="#"
          className="bg-green-800 hover:bg-green-700 py-4 m-1 flex justify-center align-middle rounded-b-[13px] text-xs uppercase font-bold tracking-wider"
        >
          Continuar por Whatsapp
        </a>
      </div>
    </div>
  );
}
