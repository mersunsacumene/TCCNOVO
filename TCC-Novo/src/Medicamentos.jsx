import { useState } from "react";
import { remedies } from "./listaRemedios";

function Medicamentos() {
  
  const [search, setSearch] = useState("");
  return (
    <>
      <section className="px-20 bg-AzulEscuro min-h-screen">
        <form className="py-10 flex justify-center">
          <label
            htmlFor="search"
            className="bg-white flex flex-row gap-4 py-4 px-12 cursor-pointer rounded-full shadow-2xl justify-center"
          >
            <img src="/search-outline.svg" className="h-6 w-6"></img>
            <input
              type="text"
              value={search}
              onChange={(dig) => {
                setSearch(dig.target.value);
              }}
              id="search"
              className="min-w-80 outline-none"
              name="search"
              placeholder="Insira o nome do medicamento!!"
            />
          </label>
        </form>
        <div className="grid grid-cols-4 gap-4 p-4">
          {search === ""
            ? remedies.map((r) => (
                <div
                  key={r.id} 
                  className="bg-white p-6 flex flex-col items-center gap-3 rounded-3xl shadow-2xl"
                >
                  <img
                    className="w-64 h-64 bg-white object-cover"
                    src={r.url}
                    alt={`Foto do Remedio: ${r.name}`}
                  />
                  <span className="text-xl">
                    {r.name} - {r.dosage}
                  </span>
                  <a
                    className="bg-Laranja p-4 text-white rounded-full text-center"
                    href={`/agendarbusca/${r.id}`}
                  >
                    Ver Produto
                  </a>
                </div>
              ))
            : remedies
                .filter((r) => {
                  return r.name.toLowerCase().includes(search.toLowerCase());
                })
                .map((r) => {
                  console.log(r);
                  return (
                    <div
                      key={r.id}
                      className="bg-white p-6 flex flex-col items-center gap-3 rounded-3xl shadow-2xl"
                    >
                      <img
                        className="w-64 h-64 bg-white object-cover"
                        src={r.url}
                        alt={`Foto do Remedio: ${r.name}`}
                      />
                      <span className="text-xl">
                        {r.name} - {r.dosage}
                      </span>
                      <a
                        className="bg-Laranja p-4 text-white rounded-full text-center"
                        href={`/medicamentos/${r.id}`}
                      >
                        Ver Produto
                      </a>
                    </div>
                  );
                })}
        </div>
      </section>
    </>
  );
}

export default Medicamentos;
