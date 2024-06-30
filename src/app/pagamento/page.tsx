"use client";
import React, { useState } from 'react';
import Link from "next/link";

const Pagamento = () => {
  const [pagamentoPix, setPagamentoPix] = useState(false);
  const [pagamentoCartao, setPagamentoCartao] = useState(false);
  const [pagamentoFinalEstadia, setPagamentoFinalEstadia] = useState(false);

  const handleCheckboxChange = (option:any) => {
    switch (option) {
      case 'pix':
        setPagamentoPix(!pagamentoPix);
        break;
      case 'cartao':
        setPagamentoCartao(!pagamentoCartao);
        break;
      case 'pagamentoFinalEstadia':
        setPagamentoFinalEstadia(!pagamentoFinalEstadia);
        break;
      default:
        break;
    }
  };

  return (
    <main className="pt-56 flex justify-center">
      <div className="flex justify-center flex-col w-96 h-96 rounded-xl border-solid border-black border p-4 relative">
        <h1 className="text-black text-2xl font-bold mb-4 absolute top-0 pt-2.5 pl-20">Pagamento via</h1>
        <div className="space-y-2 font-medium text-xl absolute top-0 pt-16">
          <label className="flex items-center py-5">
            <input
              type="checkbox"
              checked={pagamentoPix}
              onChange={() => handleCheckboxChange('pix')}
              className="mr-2"
            />
            <span className="text-black">Pix</span>
          </label>

          <label className="flex items-center py-5">
            <input
              type="checkbox"
              checked={pagamentoCartao}
              onChange={() => handleCheckboxChange('cartao')}
              className="mr-2"
            />
            <span className="text-black">Cartão</span>
          </label>

          <label className="flex items-center py-5">
            <input
              type="checkbox"
              checked={pagamentoFinalEstadia}
              onChange={() => handleCheckboxChange('pagamentoFinalEstadia')}
              className="mr-2"
            />
            <span className="text-black">Pagar no final da estadia</span>
          </label>
        </div>
        <Link href={`/`}>
          <button type='button' className='bg-green-600 w-36 h-10 rounded absolute bottom-8 right-32 hover:bg-green-800'>
            Finalizar
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Pagamento;
