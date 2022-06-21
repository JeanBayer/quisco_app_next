import { useState } from "react";
import Image from "next/image";
import useQuiosco from "hooks/useQuiosco";
import formatearDinero from "helpers";

const ModalProducto = () => {
  const [cantidad, setCantidad] = useState(1);
  const { producto, handleSetModal, handleAgregarPedido } = useQuiosco();
  const { nombre, imagen, precio } = producto;

  const decreaseQuantity = () => {
    if (cantidad <= 1) return;
    setCantidad((prevQuantity) => prevQuantity - 1);
  };

  const increaseQuantity = () => {
    if (cantidad >= 5) return;
    setCantidad((prevQuantity) => prevQuantity + 1);
  };
  return (
    <div className="md:flex gap-4">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          src={`/assets/img/${imagen}.jpg`}
          alt={`Imagen de producto ${nombre}`}
        />
      </div>

      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleSetModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 fill-amber-500 hover:fill-amber-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{nombre}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatearDinero(precio)}
        </p>

        <div className="flex w-full gap-4 mt-5">
          <button onClick={decreaseQuantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
          <p className="text-3xl">{cantidad}</p>
          <button onClick={increaseQuantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <button
          className="bg-indigo-500 hover:bg-indigo-800 px-5 py2 mt-5 text-white font-bold uppercase rounded"
          onClick={() => handleAgregarPedido({ ...producto, cantidad })}
        >
          añadir al pedido
        </button>
      </div>
    </div>
  );
};

export default ModalProducto;
