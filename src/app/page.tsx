"use client";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col items-center space-y-4 pb-96 italic">
      <h1 className="text-6xl mt-28 text-slate-900 tracking-tight font-extrabold">Personalize seu Minibar</h1>
      <p className="font-mono font-medium text-xl">Personalize seu minibar para sua chegada de forma simples e interativa</p>
      <Link href={`/signUp/`}>
        <button className="bg-slate-900 hover:bg-slate-700 text-white p-3 rounded-xl w-28">Começar</button>
        </Link>
      

      
    </div>
  );
}