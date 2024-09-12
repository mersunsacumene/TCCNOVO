import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const change = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: value,
    }));
  };
  const submit = (e) => {
    e.preventDefault();
    console.log("Dados enviado", formData);
  };
  return (
    <div className="flex h-screen overflow-hidden items-center">
      <img
        src="/Login.png"
        alt="LogoLogin"
        className="w-full h-full bg-[#0A4973] object-contain"
      />
      <section className="w-full h-max space-y-16 p-32">
        <h1 className="text-center text-7xl">Seja Bem vindo!!!</h1>
        <h2 className="text-center text-5xl">
          <b>Entrar</b>
        </h2>
        <form className="flex flex-col gap-6 text-xl" onSubmit={submit}>
          <label htmlFor="email" className="flex flex-col gap-2">
            Email:{" "}
            <input
              required
              id="email"
              type="email"
              name="email"
              onChange={change}
              value={formData.email}
              className="p-3 rounded-xl border-AzulEscuro border-2 outline-none"
              placeholder="Digite seu email!"
            />
          </label>

          <label htmlFor="password" className="flex flex-col gap-2">
            Senha:{" "}
            <input
              required
              id="password"
              type={show ? "text" : "password"}
              name="password"
              onChange={change}
              value={formData.password}
              className="p-3 rounded-xl border-AzulEscuro border-2 outline-none"
              placeholder="Digite sua Senha!"
            />
          </label>

          <label htmlFor="show" className="w-max space-x-2">
            <input
              className="h-4 w-4 "
              id="show"
              type="checkbox"
              onClick={() => {
                setShow(!show);
              }}
            />
            <b>Mostrar Senha</b>
          </label>
          <button
            type="submit"
            className="bg-Laranja rounded-full text-center py-3 hover:scale-105 text-white text-xl "
          >
            Entrar
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
