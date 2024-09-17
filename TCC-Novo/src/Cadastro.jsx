import { useState } from "react";

function Cadastro() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    cpf: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [show, setShow] = useState(false);
  const change = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: value,
    }));
  };
  const [error, setError] = useState("")
  const submit = (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
        setError("Senhas diferentes!!")
        alert(error)
    }
    console.log("Dados enviado", formData);
  };
  return (
    <div className="flex h-screen overflow-hidden items-center">
      <img
        src="/Login.png"
        alt="LogoLogin"
        className="w-full h-full bg-[#0A4973] object-contain"
      />
      <section className="w-full h-max p-32">
        <h1 className="text-center text-5xl">
          <b>Registrar</b>
        </h1>
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
          <label htmlFor="name" className="flex flex-col gap-2">
            Nome Completo:{" "}
            <input
              required
              id="name"
              type="text"
              name="name"
              onChange={change}
              value={formData.name}
              className="p-3 rounded-xl border-AzulEscuro border-2 outline-none"
              placeholder="Digite seu Nome Completo!"
            />
          </label>
          <label htmlFor="cpf" className="flex flex-col gap-2">
            CPF:{" "}
            <input
              required
              id="cpf"
              type="text"
              name="cpf"
              onChange={change}
              value={formData.cpf}
              className="p-3 rounded-xl border-AzulEscuro border-2 outline-none"
              placeholder="Digite seu CPF!"
            />
          </label>
          <label htmlFor="phone" className="flex flex-col gap-2">
            Telefone:{" "}
            <input
              required
              id="phone"
              type="text"
              name="phone"
              onChange={change}
              value={formData.phone}
              className="p-3 rounded-xl border-AzulEscuro border-2 outline-none"
              placeholder="Digite seu Telefone!"
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
          <label htmlFor="confirmPassword" className="flex flex-col gap-2">
            Confirmar Senha:{" "}
            <input
              required
              id="confirmPassword"
              type={show ? "text" : "password"}
              name="confirmPassword"
              onChange={change}
              value={formData.confirmPassword}
              className="p-3 rounded-xl border-AzulEscuro border-2 outline-none"
              placeholder="Confirme sua Senha!"
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
            Registrar
          </button>
        </form>
      </section>
    </div>
  );
}

export default Cadastro;
