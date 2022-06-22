import ResumenProducto from "components/ResumenProducto";
import useQuiosco from "hooks/useQuiosco";
import Layout from "layout/Layout";

export default function Resumen() {
  const { pedido } = useQuiosco();
  return (
    <Layout pagina="Resumen">
      <h1 className="text-xl md:text-4xl font-black">resumen</h1>
      <p className="text-md md:text-2xl mb-4 md:my-2">Revisa tu pedido</p>

      {pedido.length === 0 ? (
        <p className="text-center text-2xl my-10">No hay elementos en tu pedido</p>
      ) : (
        pedido.map((producto) => (
          <ResumenProducto key={producto.id} producto={producto} />
        ))
      )}
    </Layout>
  );
}
