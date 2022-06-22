import Image from "next/image";
import formatearDinero from "helpers";

const ResumenProducto = ({ producto }) => {
  const { nombre, precio, imagen, id, cantidad } = producto;
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="md:w-1/6">
        <Image
          width={300}
          height={400}
          alt={`Image producto ${nombre}`}
          src={`/assets/img/${imagen}.jpg`}
        />
      </div>
      <div className="md:w-4/6">
        <p className="text-2xl font-bold">{nombre}</p>
        <p className="text-xl font-bold mt-2">cantidad: {cantidad}</p>
        <p className="text-md font-bold text-gray-500 mt-2">
          Precio: {formatearDinero(precio)}
        </p>
        <p className="text-xl font-bold text-amber-500 mt-2">
          Subtotal: {formatearDinero(precio * cantidad)}
        </p>
      </div>
      <div>
        <button className="bg-sky-700 flex gap-2 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full ">
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
          editar
        </button>
        <button className="bg-red-700 flex gap-2 px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full mt-3">
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
          eliminar
        </button>
      </div>
    </div>
  );
};

export default ResumenProducto;
