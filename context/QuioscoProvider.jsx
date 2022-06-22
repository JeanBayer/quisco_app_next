import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedido, setPedido] = useState([]);

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

  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id)[0];
    setCategoriaActual(categoria);
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

  const existProductInOrder = (id) => {
    return pedido.some((elementoState) => elementoState.id === id);
  };

  const handlerDeleteProduct = (id) => {
    const newArrayPedido = pedido.filter(
      (pedidoState) => pedidoState.id !== id
    );
    setPedido(newArrayPedido);
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
        handlerDeleteProduct
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };
export default QuioscoContext;
