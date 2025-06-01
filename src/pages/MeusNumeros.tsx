import { Link } from "react-router-dom";
import Header from "../components/Header";

const MeusNumeros = () => {
  // Em um sistema real, estes dados viriam de uma API
  const minhasParticipacoes = [
    {
      id: "1",
      rifa: "XRE 300 RARIDADE",
      numeros: [15, 23, 45, 67, 89],
      dataCompra: "2024-01-15",
      valor: 0.1,
      status: "ativo",
    },
    {
      id: "2",
      rifa: "XRE 300 RARIDADE",
      numeros: [102, 156, 234],
      dataCompra: "2024-01-14",
      valor: 0.06,
      status: "ativo",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Meus Números
          </h1>

          {minhasParticipacoes.length === 0 ? (
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <h2 className="text-xl font-semibold text-gray-600 mb-2">
                Nenhuma participação encontrada
              </h2>
              <p className="text-gray-500 mb-6">
                Você ainda não participou de nenhuma rifa.
              </p>
              <Link
                to="/"
                className="inline-block bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Participar Agora
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {minhasParticipacoes.map((participacao) => (
                <div
                  key={participacao.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg text-gray-900">
                      {participacao.rifa}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        participacao.status === "ativo"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {participacao.status === "ativo" ? "Ativo" : "Finalizado"}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        Meus Números:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {participacao.numeros.map((numero) => (
                          <span
                            key={numero}
                            className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold"
                          >
                            {numero.toString().padStart(3, "0")}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        Data da Compra:
                      </p>
                      <p className="text-gray-600">
                        {new Date(participacao.dataCompra).toLocaleDateString(
                          "pt-BR"
                        )}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        Valor Pago:
                      </p>
                      <p className="text-green-600 font-semibold">
                        R$ {participacao.valor.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-6 text-center">
                <Link
                  to="/"
                  className="inline-block bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Participar de Mais Rifas
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MeusNumeros;
