import formatearDinero from "helpers";
import Image from "next/image";
import useQuiosco from "hooks/useQuiosco";

const Producto = ({ producto }) => {
  const { id, nombre, precio, imagen } = producto;
  const { handleSetModal, handleSetProducto } = useQuiosco();
  return (
    <div className="border p-3">
      <Image width={400} height={500} src={`/assets/img/${imagen}.jpg`} />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 from-black text-4xl text-amber-500">
          {formatearDinero(precio)}
        </p>
        <button
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            handleSetProducto(producto);
            handleSetModal();
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Producto;
