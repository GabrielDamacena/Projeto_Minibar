"use client";
import Link from "next/link";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsCartDashFill } from "react-icons/bs";

interface IProduct {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

async function fetchProducts(): Promise<IProduct[]> {
  const result = await fetch("https://api.mercadolibre.com/sites/MLB/search?q=chocolate");
  const jsonResult = await result.json();
  return jsonResult.results; // Assuming results is the array containing products
}

const Carrinho = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false); // Estado para controlar a visibilidade do carrinho

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    getProducts();
  }, []);

  // Função para adicionar um produto ao carrinho
  const handleAddToCart = (product: IProduct) => {
    setCartItems(prevItems => [...prevItems, product]);
    setIsCartOpen(true); // Abrir a section do carrinho ao adicionar um item
  };

  // Função para remover um produto do carrinho
  const handleRemoveFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Função para calcular o total da compra
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  // Função para simular o pagamento da compra
  const handlePay = () => {
    setCartItems([]); // Limpar o carrinho após o pagamento
    setIsCartOpen(false); // Fechar a section do carrinho após o pagamento
  };

  return (
    <main className="flex justify-center space-x-5 pt-28">
      <section className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white w-full max-w-72 cursor-pointer rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out relative">
            <img src={product.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="produto" />
            <span className="text-black text-3xl font-normal p-5">{product.price}</span>
            <h1 className="text-black text-xl font-bold p-5">{product.title}</h1>
            <button 
              type='button' 
              className='top-0 right-0 w-11 h-11 my-3 mx-3.5 text-blue-500 text-2xl absolute'
              onClick={() => handleAddToCart(product)}
            >
              <BsFillCartPlusFill/>
            </button>
          </div>
        ))}
      </section>
      
      {/* Section do Carrinho */}
      {cartItems.length > 0 && (
        <section className={`w-full max-w-80 bg-white fixed top-0 right-0 pt-24 px-5 pb-5 ${isCartOpen ? '' : 'hidden'}`}>
          {cartItems.map((item) => (
            <div key={item.id} className='flex items-start mb-5 pb-5 border-solid border-b-gray-800 border relative'>
              <img src={item.thumbnail} alt="produto" />
              <div className='py-0 pr-9 pl-2.5'>
                <h3 className='text-black text-sm font-medium mb-2'>{item.title}</h3>
                <h3 className='text-black font-medium text-2xl'>{item.price}</h3>
                <button 
                  type='button' 
                  className='absolute text-rose-900 top-0 right-0 text-2xl'
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  <BsCartDashFill />
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <Link href={`/pagamento/`}>
                <button 
                type="button" 
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                onClick={handlePay}
                >
                Pagar ({cartItems.length} itens) - Total: R$ {calculateTotal()}
                </button>
            </Link>
            <button 
              type="button" 
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-md"
              onClick={() => setIsCartOpen(false)}
            >
              Fechar Carrinho
            </button>
          </div>
        </section>
      )}
    </main>
  );
}

export default Carrinho;
