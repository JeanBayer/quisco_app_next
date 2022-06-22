import { useRouter } from "next/router";

const pasos = [
  { paso: 1, nombre: "Menú", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Datos y Total", url: "/total" },
];

const Pasos = () => {
  const router = useRouter();

  const calcularProgreso = () => {
    const pasoCalculado = pasos.find((paso) => paso.url === router.pathname);
    const { paso } = pasoCalculado;
    const cantidadTotalPasos = pasos.length;

    // si es el ultimo paso, llena el 100%
    if (paso === cantidadTotalPasos) return 100;

    // sacamos el porcentaje que vale cada paso
    const porcentajePaso = 100 / cantidadTotalPasos;
    // retornamos el porcentaje de ese paso menos su 70% para que sea mas pequeña la barra
    return paso * porcentajePaso - porcentajePaso * 0.7;
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map((paso) => (
          <button
            onClick={() => {
              router.push(paso.url);
            }}
            key={paso.paso}
            className="text-2xl font-bold"
          >
            {paso.nombre}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div
          className="bg-amber-500 rounded-full h-2"
          style={{ width: `${calcularProgreso()}%` }}
        ></div>
      </div>
    </>
  );
};

export default Pasos;
