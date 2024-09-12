import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Agendamentos from "./Agendamentos.jsx";
import Medicamentos from "./Medicamentos.jsx";
import { createRoot } from "react-dom/client";
import Agendar from "./AgendarBusca.jsx";
import Cadastro from "./Cadastro.jsx";
import { StrictMode } from "react";
import Login from "./Login.jsx";
import App from "./App.jsx";
import "./index.css";
import { useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const hidelocations = ["/entrar", "/cadastre-se"];
  return (
    <>
      {!hidelocations.includes(location.pathname) && (
        <header className="bg-AzulEscuro text-white flex flex-row items-center justify-between px-20 py-2">
          <a href="/home">
            <img src="LogoPequeno.png" alt="logoSuperior" />
          </a>
          <nav className="flex flex-row gap-6 text-2xl">
            <NavLink
              to="/home"
              className={({ isActive }) => isActive && "text-Laranja"}
            >
              Home
            </NavLink>
            <NavLink
              to="/medicamentos"
              className={({ isActive }) => isActive && "text-Laranja"}
            >
              Medicamentos
            </NavLink>
            <NavLink
              to="/agendamentos"
              className={({ isActive }) => isActive && "text-Laranja"}
            >
              Agendamentos
            </NavLink>
          </nav>
          <nav className="w-[187px] gap-6 flex flex-row items-center justify-end">
            <a href="/cadastre-se" className="underline">
              Cadastre-se
            </a>
            <a href="/entrar" className="px-3 py-2 rounded-full bg-Laranja">
              Entrar
            </a>
          </nav>
        </header>
      )}
      <main>
        <Routes>
          <Route path="/home" element={<App />} />
          <Route path="/medicamentos" element={<Medicamentos />} />
          <Route path="/agendamentos" element={<Agendamentos />} />
          <Route path="/agendarbusca/:id" element={<Agendar />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="/cadastre-se" element={<Cadastro />} />
        </Routes>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </StrictMode>
);
