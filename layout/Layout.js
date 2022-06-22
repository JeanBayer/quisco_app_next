import Head from "next/head";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import Sidebar from "components/Sidebar";
import ModalProducto from "components/ModalProducto";
import Pasos from "components/Pasos";
import useQuiosco from "hooks/useQuiosco";

import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

export default function Layout({ pagina, children }) {
  const { modal, handleSetModal } = useQuiosco();
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>
      <div className="flex">
        <aside className="w-3/12 xl:w-1/4 2xl:w-1/5 h-screen overflow-y-scroll scrollbar-hide">
          <Sidebar />
        </aside>
        <main className="w-9/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll scrollbar-hide">
          <div className="p-2 sm:p-8">
            <Pasos />
            {children}
          </div>
        </main>
      </div>
      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto />
      </Modal>
      <ToastContainer />
    </>
  );
}
