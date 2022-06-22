import formatearDinero from "helpers";
import useQuiosco from "hooks/useQuiosco";
import Layout from "layout/Layout";

export default function Total() {
  const { pedido, total, nombre, setNombre, colocarOrden } = useQuiosco();

  const comprobarPedido = () => {
    return pedido.length === 0 || nombre === "";
  };

  return (
    <Layout pagina="Resumen">
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>

      <form onSubmit={colocarOrden}>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            className="bg-slate-50 w-full lg:w-1/3 mt-3 p-2 rounded shadow-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar{" "}
            <span className="font-bold">{formatearDinero(total)}</span>
          </p>
        </div>
        <div className="mt-5">
          <input
            type="submit"
            className={`${
              comprobarPedido()
                ? "bg-slate-200"
                : "bg-indigo-600 hover:bg-indigo-700"
            } w-full lg:w-1/3 px-5 py-2 rounded uppercase font-bold text-white text-center"
            value="confirmar pedido`}
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  );
}
