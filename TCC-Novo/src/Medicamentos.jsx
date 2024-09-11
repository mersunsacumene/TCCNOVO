import { useState } from "react";

function Medicamentos() {
  const remedies = [
    {
      url: "https://dcdn.mitiendanube.com/stores/003/033/056/products/tadalafila-5-mg_1-894454a17e4593541216916946939934-480-0.png",
      id: 13,
      name: "Tadalafila",
      dosage: "5mg",
    },
    {
      url: "https://dgp88uvg9z4ut.cloudfront.net/Custom/Content/Products/58/86/5886_novalgina-50-mg-c-100-ml-p4126_m1_638585481322747049.png",
      id: 15,
      name: "Novalgina",
      dosage: "100mg",
    },
    {
      url: "https://www.ergovita.com.br/lojas/00028727/prod/VITOF240.png",
      id: 14,
      name: "Omega 3",
      dosage: "120cp",
    },
    {
      url: "https://lncimg.lance.com.br/cdn-cgi/image/width=640,quality=75,fit=pad,format=webp/uploads/2023/10/Therma-Pro-Hardcore-Integralmedica.png",
      id: 17,
      name: "Therma",
      dosage: "60cp",
    },
    {
      url: "https://nutrigenes.com.br/wp-content/uploads/2022/06/MULTIVITAMINAS.png",
      id: 16,
      name: "Multi Vitaminas",
      dosage: "60cp",
    },
    {
      url: "https://cdn.dooca.store/63414/products/xaropes.jpg?v=1671456728&webp=0",
      id: 18,
      name: "Xarope de Pitanga",
      dosage: "100ml",
    },
    {
      url: "https://drogal.vtexassets.com/arquivos/ids/187261/51206.png?v=638387090217400000",
      id: 19,
      name: "Melagriao",
      dosage: "150mg",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpW10eq3xa1RLBfTmyDDDmPzPsMzwHkFWDKg&s",
      id: 20,
      name: "Bcaa",
      dosage: "120cp",
    },
    {
      url: "https://images.tcdn.com.br/img/img_prod/1063102/paracetamol_125237387_1_b094e13a9ad2e1eb3d7ee61b024761ee.png",
      id: 12,
      name: "Paracetamol",
      dosage: "750mg",
    },
    {
      url: "https://www.metasuplementos.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_pote.png",
      id: 11,
      name: "Vitaminas & Minerais",
      dosage: "30cp",
    },
    {
      url: "https://dcdn.mitiendanube.com/stores/001/824/104/products/composto-antiacne1-2f9d2b998a2390442a16333718864898-640-0.png",
      id: 10,
      name: "AntiAcne",
      dosage: "120cp",
    },
    {
      url: "https://medicinalnaweb.vteximg.com.br/arquivos/ids/164902/maca_pote.png?v=638326524125930000",
      id: 21,
      name: "Maca Peruana",
      dosage: "90cp",
    },
  ];
  const [search, setSearch] = useState("");
  return (
    <>
      <section className="px-20 bg-AzulEscuro">
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
                        href={`/agendarbusca/${r.id}`}
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
