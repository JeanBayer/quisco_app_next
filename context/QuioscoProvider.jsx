import { useState, useEffect, createContext } from "react";
import axios from "axios";

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

  const handleAgregarPedido = ({ categoriaId, imagen, ...producto }) => {
    setModal(false);
    if (existProductInOrder(producto.id)) {
      const newArrayPedido = pedido.map((elementoState) =>
        elementoState.id === producto.id ? producto : elementoState
      );
      setPedido(newArrayPedido);
      return;
    }
    setPedido([...pedido, producto]);
  };

  const existProductInOrder = (id) => {
    return pedido.some((elementoState) => elementoState.id === id);
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
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

export { QuioscoProvider };
export default QuioscoContext;
