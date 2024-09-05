function App() {
  const events = [
    {
      name: "Doação Dipirona",
      remedy: "Dipirona",
      date: "26/08/2024",
      description:
        "A dipirona, também conhecida como metamizol, é um medicamento utilizado para aliviar dores e reduzir febre. Sua doação pode ser de grande importância para instituições de saúde, especialmente em áreas com acesso limitado a medicamentos. A doação de dipirona pode vajudar a garantir que pessoas em necessidade tenham acesso a um tratamento eficaz e seguro para aliviar sintomas de dor e febre",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1090.9262744554092!2d-47.227487022587425!3d-23.11817322016454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4c9640294253%3A0xee475bf64679a2f1!2sEquipe%20Parabens%20Cabeleireiros%20Unissex!5e0!3m2!1spt-BR!2sbr!4v1725494053545!5m2!1spt-BR!2sbr",
    },
    {
      name: "Vacina Covid",
      remedy: "Vacina",
      date: "26/08/2024",
      description:
        "Participe do nosso grande evento de vacinação contra a COVID-19! A campanha de imunização será realizada no próximo sábado, 26 de agosto, das 8h às 17h, no Centro Comunitário da Saúde. Este evento é uma oportunidade para proteger a si mesmo e a sua comunidade, garantindo que todos estejam seguros contra o vírus.",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1090.9262744554092!2d-47.227487022587425!3d-23.11817322016454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4c9640294253%3A0xee475bf64679a2f1!2sEquipe%20Parabens%20Cabeleireiros%20Unissex!5e0!3m2!1spt-BR!2sbr!4v1725494053545!5m2!1spt-BR!2sbr",
    },
    {
      name: "Doação De Sangue",
      remedy: "Sangue",
      date: "26/08/2024",
      description:
        "Para doar sangue, é necessário estar em boas condições de saúde, ter entre 16 e 69 anos (com algumas variações dependendo da legislação local) e atender a outros critérios específicos estabelecidos pelos bancos de sangue. O procedimento é realizado por profissionais treinados e segue rigorosos padrões de segurança e higiene.",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1090.9262744554092!2d-47.227487022587425!3d-23.11817322016454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4c9640294253%3A0xee475bf64679a2f1!2sEquipe%20Parabens%20Cabeleireiros%20Unissex!5e0!3m2!1spt-BR!2sbr!4v1725494053545!5m2!1spt-BR!2sbr",
    },
  ];
  return (
    <>
      <section className="flex flex-row justify-between items-center px-20">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl">Saúde ao alcance de todos!</h1>
          <p className="text-xl">
            Agende medicamentos e acompanhe suas solicitações diretamente
            <br /> pelo site da Prefeitura. Aqui, você também fica por dentro
            dos <br />
            eventos de doação de remédios na sua região.
          </p>
          <a
            href="/entrar"
            className="p-2 bg-Laranja rounded-full text-white w-max hover:bg-AzulEscuro"
          >
            Participe agora mesmo
          </a>
        </div>
        <img
          src="Enfermeiro.png"
          width={700}
          height={504}
          className="w-[700px] h-[504px]"
        />
      </section>
      <section className="bg-AzulEscuro grid grid-cols-3 px-20 py-6 items-center place-items-center">
        {events.map((e) => (
          <div className="flex flex-col gap-4 text-white col-span-1 max-w-96">
            <h2 className="text-2xl text-center">{e.name}</h2>
            <div className="text-xl flex flex-row justify-between">
              <p>{e.name}</p>
              <p>{e.date}</p>
            </div>
            <p className="text-justify">{e.description}</p>
            <iframe
              className="w-full"
              src={e.mapUrl}
              width="400"
              height="300"
              allowFullScreen="on"
              loading="lazy"
            ></iframe>
          <a href="/login" className="py-2 bg-Laranja rounded-full text-white text-center">Participar do Evento</a>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
