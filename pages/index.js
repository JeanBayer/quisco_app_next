import Layout from "layout/Layout";
import useQuiosco from "hooks/useQuiosco";
import Producto from "components/Producto";

export default function Home() {
  const { categoriaActual } = useQuiosco();
  const { nombre } = categoriaActual ?? { nombre: "Todas" };
  const { productos } = categoriaActual ?? { productos: [] };
  return (
    <Layout pagina={`Menu ${nombre}`}>
      <h1 className="text-xl sm:text-2xl md:text-4xl font-black pb-3">{nombre}</h1>
      <p className="pb-3">Elige y personaliza tu pedido a continuación</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {productos?.map((producto) => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  );
}
