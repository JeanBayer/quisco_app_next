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
      <div className="md:w-5/6">
        <p className="text-2xl font-bold">{nombre}</p>
        <p className="text-xl font-bold mt-2">cantidad: {cantidad}</p>
        <p className="text-md font-bold text-gray-500 mt-2">
          Precio: {formatearDinero(precio)}
        </p>
        <p className="text-xl font-bold text-amber-500 mt-2">
          Subtotal: {formatearDinero(precio * cantidad)}
        </p>
      </div>
    </div>
  );
};

export default ResumenProducto;
