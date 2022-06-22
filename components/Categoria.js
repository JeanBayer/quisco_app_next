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
      onClick={() => handleClickCategoria(id)}
      className={`flex justify-center md:justify-start items-center md:gap-4 w-full border p-2 md:p-3 hover:bg-amber-400 ${color}`}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icono}.svg`}
        alt="logo categoria"
      />
      <p className="hidden md:block text-sm font-bold hover:cursor-pointer">
        {nombre}
      </p>
    </div>
  );
};

export default Categoria;
