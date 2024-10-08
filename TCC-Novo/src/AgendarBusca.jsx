import React, { useEffect, useState } from "react";
import { remedies } from "./listaRemedios";
import { useParams } from "react-router-dom";

function AgendarBusca() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    setProduct(remedies.find((p) => p.id == id));
    console.log(remedies.find((p) => p.id == id));
  }, [id]);
  if (product == null) {
    return <p> {id} Product nao encontrado!!</p>;
  }
  return (
    <section className="px-20 bg-AzulEscuro min-h-screen">
      <div className="flex flex-row justify-center">
        <div className="rounded-2xl p-6 flex justify-center h-max w-full">
          <img src={product.url} alt="imagem" className="w-96 h-96" />
        </div>
        <div className="flex flex-col gap-20 items-center justify-center w-full">
          <h1 className="text-white font-bold text-2xl text-center">
            {product.name} - {product.dosage}
          </h1>
          <p className="p-6 rounded-3xl text-lg max-w-[512px] bg-white">
            {product.description}
          </p>
          <div className="space-x-6">
            <button className="bg-Laranja p-4 text-white rounded-full text-center">
              Agendar Produto
            </button>
            <button className="bg-Laranja p-4 text-white rounded-full text-center">
              Localizar Unidade
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex justify-center w-full">
          <iframe
            src={product.maps[0].url}
            frameborder="0"
            width={512}
            height={512}
            className="w-96 h-96"
          ></iframe>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-4">
          {product.maps.map((m, i) => (
            <span className="bg-white p-4 rounded-xl w-max h-max" key={i}>
              {m.addres}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AgendarBusca;
