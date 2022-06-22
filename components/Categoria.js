import Image from "next/image";
import useQuiosco from "hooks/useQuiosco";
import { useRouter } from "next/router";

const Categoria = ({ categoria }) => {
  const { categoriaActual, handleClickCategoria } = useQuiosco();
  const router = useRouter();

  const { nombre, icono, id } = categoria;
  const color =
    router.pathname !== "/"
      ? null
      : categoriaActual?.id === id
      ? "bg-amber-400"
      : null;
  return (
    <div
      className={`flex items-center gap-4 w-full border p-5 hover:bg-amber-400 ${color}`}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icono}.svg`}
        alt="logo categoria"
      />
      <button
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
