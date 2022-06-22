import Image from "next/image";
import useQuiosco from "hooks/useQuiosco";
import Categoria from "components/Categoria";

const Sidebar = () => {
  const { categorias } = useQuiosco();
  return (
    <>
      <Image
        width={300}
        height={200}
        src="/assets/img/logo.svg"
        alt="logo imagen"
      />
      <nav className="mt-1 sm:mt-10">
        {categorias &&
          categorias.map((categoria) => (
            <Categoria key={categoria.id} categoria={categoria}></Categoria>
          ))}
      </nav>
    </>
  );
};

export default Sidebar;
