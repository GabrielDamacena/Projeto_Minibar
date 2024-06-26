"use client";
import Image from 'next/image';
import Link from "next/link";



export default function Carrinho(){
    return(
        <div className="flex justify-center space-x-5">
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white w-80 h-96 rounded-xl shadow-md shadow-stone-500 flex flex-col justify-center items-center">
                    <img src="/img/Chocolate_Nestle.png" alt="Chocolate"  className="w-full h-32 object-cover rounded-t-xl"/>
                    <h1 className=" text-black text-xl font-bold">Barra de chocolate ao leite Nestlé 80g</h1>
                    <span className="text-black text-xl font-bold">R$ 5.50</span>
                </div>
                <div className="bg-white w-80 h-96 rounded-xl shadow-md shadow-stone-500 flex flex-col justify-center items-center">
                    <img src="/img/Chocolate_Kitkat.webp" alt="Chocolate"  className="w-full h-32 object-cover rounded-t-xl"/>
                    <h1 className="text-black text-xl font-bold">Chocolate Kit Kat ao Leite Nestlé - 41,5g</h1>
                    <span className="text-black text-xl font-bold">R$ 2.99</span>
                </div>
                <div className="bg-white w-80 h-96 rounded-xl shadow-md shadow-stone-500 flex flex-col justify-center items-center">
                    <img src="/img/Chocolate_Lacta_OuroBranco.webp" alt="Chocolate"  className="w-full h-32 object-cover rounded-t-xl"/>
                    <h1 className="text-black text-xl font-bold">Barra de Chocolate Branco Lacta com Recheio Ouro Branco 98g</h1>
                    <span className="text-black text-xl font-bold">R$ 5.99</span>
                </div>

                <div className="bg-white w-80 h-full rounded-xl shadow-md shadow-stone-500 flex flex-col justify-center items-center">
                    <img src="/img/Chocolate_bis.webp" alt="Chocolate"  className="w-full h-80 object-cover rounded-t-xl"/>
                    <h1 className="text-black text-xl font-bold">Bis Xtra Chocolate ao Leite 45g</h1>
                    <span className="text-black text-xl font-bold">R$ 2.99</span>
                </div>

                <div className="bg-white w-80 h-full rounded-xl shadow-md shadow-stone-500 flex flex-col justify-center items-center">
                    <Image 
                        src="/img/Refri_Cocacola.webp" 
                        alt="Refri_Coca_Cola" 
                        width={160} 
                        height={160} 
                        className="w-full h-80 object-cover rounded-t-xl"
                    />
                    <h1 className="text-black text-xl font-bold">Refrigerante lata Coca Cola 350ml</h1>
                    <span className="text-black text-xl font-bold">R$ 4.99</span>
                </div>

                <div className="bg-white w-80 h-full rounded-xl shadow-md shadow-stone-500 flex flex-col justify-center items-center">
                    <Image 
                        src="/img/Refri_Pepsi_Mini.webp" 
                        alt="Refri_Pepsi_Mini" 
                        width={160} 
                        height={160} 
                        className="w-full h-80 object-cover rounded-t-xl"
                    />
                    <h1 className="text-black text-xl font-bold">Refrigerante cola pepsi garrafa 200ML</h1>
                    <span className="text-black text-xl font-bold">R$ 1.99</span>
                </div>
            </div>
        </div>
        
        

    );
}