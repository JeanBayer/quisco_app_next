import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);
  const [nombre, setNombre] = useState("");
  const [total, setTotal] = useState(0);

  const router = useRouter();

  const obtenerCategorias = async () => {
    const { data } = await axios("/api/categorias");
    setCategorias(data);
  };

  useEffect(() => {
    obtenerCategorias();
  }, []);

  useEffect(() => {
    setCategoriaActual(categorias[0]);
  }, [categorias]);

  useEffect(() => {
    const totalAPagar = pedido.reduce(
      (previousValue, pedido) =>
        previousValue + pedido.precio * pedido.cantidad,
      0
    );
    setTotal(totalAPagar);
  }, [pedido]);

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id)[0];
    setCategoriaActual(categoria);
    router.push("/");
  };

  const handleSetProducto = (producto) => setProducto(producto);

  const handleSetModal = () => setModal(!modal);

  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    setModal(false);
    if (existProductInOrder(producto.id)) {
      const newArrayPedido = pedido.map((elementoState) =>
        elementoState.id === producto.id ? producto : elementoState
      );
      setPedido(newArrayPedido);
      toast.success("Pedido Actualizado");
      return;
    }
    setPedido([...pedido, producto]);
    toast.success("Agregado al pedido");
  };

  const existProductInOrder = (id) =>
    pedido.some((elementoState) => elementoState.id === id);

  const handlerDeleteProduct = (id) => {
    const newArrayPedido = pedido.filter(
      (pedidoState) => pedidoState.id !== id
    );
    setPedido(newArrayPedido);
  };

  const colocarOrden = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/ordenes", {
        nombre,
        total,
        fecha: Date.now().toString(),
        pedido,
      });

      //Resetear App
      setCategoriaActual(categorias[0]);
      setPedido([]);
      setNombre("");
      setTotal(0);

      toast.success("Pedido realizado correctamente");

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        producto,
        handleSetProducto,
        modal,
        handleSetModal,
        pedido,
        handleAgregarPedido,
        handlerDeleteProduct,
        nombre,
        setNombre,
        colocarOrden,
        total,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };
export default QuioscoContext;
