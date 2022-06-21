import Head from "next/head";
import Sidebar from "components/Sidebar";

export default function Layout({ pagina, children }) {
  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>
      <div className="md:flex">
        <aside className="w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>
        <main className="w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">{children}</div>
        </main>
      </div>
    </>
  );
}
