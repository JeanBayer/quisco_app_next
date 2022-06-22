import Image from "next/image";
import formatearDinero from "helpers";
import useQuiosco from "hooks/useQuiosco";

const ResumenProducto = ({ producto }) => {
  const { nombre, precio, imagen, id, cantidad } = producto;
  const { handleSetModal, handleSetProducto, handlerDeleteProduct } =
    useQuiosco();
  return (
    <div className="shadow p-5 mb-3 flex flex-col sm:flex-row gap-6 md:gap-10 items-center">
      <div className="sm:w-2/6 md:w-1/6">
        <Image
          width={300}
          height={400}
          alt={`Image producto ${nombre}`}
          src={`/assets/img/${imagen}.jpg`}
        />
      </div>
      <div className="sm:w-3/6 md:w-4/6">
        <p className="text-xl md:text-2xl font-bold">{nombre}</p>
        <p className="text-lg md:text-xl font-bold mt-2">
          cantidad: {cantidad}
        </p>
        <p className="text-md font-bold text-gray-500 mt-2">
          Precio: {formatearDinero(precio)}
        </p>
        <p className="text-xl font-bold text-amber-500 mt-2">
          Subtotal: {formatearDinero(precio * cantidad)}
        </p>
      </div>
      <div className="w-full sm:w-1/6">
        <button
          className="text-sm justify-center bg-sky-700 flex gap-2 p-2 md:px-5 md:py-2 text-white rounded-md font-bold uppercase shadow-md w-full"
          onClick={() => {
            handleSetProducto(producto);
            handleSetModal();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
          <span className="sm:hidden md:block">editar</span>
        </button>
        <button
          className="text-sm justify-center bg-red-700 flex gap-2 p-2 md:px-5 md:py-2 text-white rounded-md font-bold uppercase shadow-md w-full mt-3"
          onClick={() => handlerDeleteProduct(id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <span className="sm:hidden md:block">eliminar</span>
        </button>
      </div>
    </div>
  );
};

export default ResumenProducto;
