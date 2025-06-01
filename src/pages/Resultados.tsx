import Header from "../components/Header";

const Resultados = () => {
  const resultados = [
    {
      id: "1",
      rifa: "XRE 300 RARIDADE",
      dataRifa: "2024-01-15",
      numeroSorteado: 123,
      ganhador: "João Silva",
      premio: "Moto XRE 300",
      status: "finalizada",
    },
    {
      id: "2",
      rifa: "iPhone 15 Pro",
      dataRifa: "2024-01-10",
      numeroSorteado: 456,
      ganhador: "Maria Santos",
      premio: "iPhone 15 Pro",
      status: "finalizada",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Resultados das Rifas
          </h1>

          {resultados.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="w-16 h-16 mx-auto text-gray-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <h2 className="text-xl font-semibold text-gray-600 mb-2">
                Nenhum resultado encontrado
              </h2>
              <p className="text-gray-500">
                Os resultados das rifas aparecerão aqui após o sorteio.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {resultados.map((resultado) => (
                <div
                  key={resultado.id}
                  className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-green-50 to-blue-50"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-xl text-gray-900">
                      {resultado.rifa}
                    </h3>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {resultado.status === "finalizada"
                        ? "Finalizada"
                        : "Em andamento"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        Data do Sorteio
                      </p>
                      <p className="text-gray-600">
                        {new Date(resultado.dataRifa).toLocaleDateString(
                          "pt-BR"
                        )}
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        Número Sorteado
                      </p>
                      <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-lg inline-block">
                        {resultado.numeroSorteado.toString().padStart(3, "0")}
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        Ganhador
                      </p>
                      <p className="text-green-600 font-semibold">
                        {resultado.ganhador}
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        Prêmio
                      </p>
                      <p className="text-blue-600 font-semibold">
                        {resultado.premio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resultados;
